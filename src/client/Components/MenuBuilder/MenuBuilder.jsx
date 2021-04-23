import React from "react";
import IngridientInfo from "../IngridientInfo/IngridientInfo";

import { MenuItem, Button, TextField, Snackbar } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const MenuBuilder = ({
	ingridientInfo,
	meal,
	setMeal,
	MealsEnum,
	open,
	setOpen,
}) => {
	return (
		<>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<IngridientInfo ingridient={ingridientInfo} />
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<TextField
					id="outlined-select-meal"
					select
					label="Select Meal"
					value={meal}
					onChange={(e) => setMeal(e.target.value)}
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
						//save ingridient to breakfast
						onAddIngirident({ meal, ingridientInfo });

						setOpen(true);
					}}
				>
					Add to menu
				</Button>
				<Snackbar
					open={open}
					onClose={() => setOpen((oldState) => !oldState)}
					message={"Successfuly added!"}
					severity="success"
				/>
			</div>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddIngirident: (data) =>
			dispatch({
				type: actionTypes.ADD_INGREDIENT,
				data: data,
			}),
	};
};

export default connect(null, mapDispatchToProps)(MenuBuilder);
