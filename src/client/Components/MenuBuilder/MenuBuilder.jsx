import React from "react";
import IngridientInfo from "../IngridientInfo/IngridientInfo";
import { MealsEnum } from "../../constants";
import { MenuItem, Button, TextField, Snackbar } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const MenuBuilder = (props) => {
	return (
		<>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<IngridientInfo ingridient={props.ingridientInfo} />
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<TextField
					id="outlined-select-meal"
					select
					label="Select Meal"
					value={props.meal}
					onChange={(e) => props.onChangeMeal(e.target.value)}
					variant="outlined"
				>
					<MenuItem value={MealsEnum.Breakfast}>Breakfast</MenuItem>
					<MenuItem value={MealsEnum.Lunch}>Lunch</MenuItem>
					<MenuItem value={MealsEnum.Dinner}>Dinner</MenuItem>
				</TextField>
				<Button
					variant="outlined"
					color="primary"
					onClick={() => {
						//save ingridient
						props.onAddIngirident({
							meal: props.meal,
							ingridientInfo: props.ingridientInfo,
						});

						props.setOpen(true);
					}}
				>
					Add to menu
				</Button>
				<Button
					variant="outlined"
					color="primary"
					onClick={() => {
						//remove ingridient
						props.onRemoveIngirident({
							meal: props.meal,
							ingridientInfo: props.ingridientInfo,
						});

						props.setOpen(true);
					}}
				>
					Remove from menu
				</Button>
				<Snackbar
					open={props.open}
					onClose={() => props.setOpen((oldState) => !oldState)}
					message={"Successfuly done!"}
					severity="success"
				/>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		meal: state.meal,
		b: state.Breakfast,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddIngirident: (data) =>
			dispatch({
				type: actionTypes.ADD_INGREDIENT,
				data: data,
			}),
		onRemoveIngirident: (data) =>
			dispatch({
				type: actionTypes.REMOVE_INGREDIENT,
				data: data,
			}),
		onChangeMeal: (data) =>
			dispatch({
				type: actionTypes.CHANGE_MEAL,
				data: data,
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBuilder);
