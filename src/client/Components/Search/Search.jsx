import React, { useState } from "react";
import axios from "../../axios";
import creds from "../../apikey.json";
import IngridientInfo from "../IngridientInfo/IngridientInfo";
import Counter from "../Counter/Counter";

import {
	MenuItem,
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@material-ui/core";

const MealsEnum = Object.freeze({ Breakfast: 0, Lunch: 1, Dinner: 2 });

const Search = (props) => {
	const [ingridient, setIngridient] = useState("");
	const [ingridientInfo, setIngridientInfo] = useState(null);
	const [amount, setAmount] = useState(0);
	const [meal, setMeal] = useState(MealsEnum.Breakfast);
	const [ingridientList, setIngridientList] = useState([[], [], []]);

	const handleSearch = () => {
		axios.searchIngridient
			.get("", {
				params: {
					query: ingridient,
					apiKey: creds.key,
					number: 1,
				},
			})
			.then((res) => {
				if (res.data?.results.length) {
					const searchResults = res.data?.results[0];
					getIngridientInfo(searchResults);
				} else {
					alert("Please choose another ingridient!");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getIngridientInfo = (searchResults) => {
		axios.nutritionInfo
			.get(`${searchResults.id}/information`, {
				params: {
					apiKey: creds.key,
					amount: amount,
					unit: "grams",
				},
			})
			.then((response) => {
				const info = response.data;

				setIngridientInfo({
					id: searchResults.id,
					name: ingridient,
					nutritions: info.nutrition.nutrients,
				});
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<TextField
					id="search"
					label="Search"
					variant="outlined"
					value={ingridient}
					onChange={(e) => setIngridient(e.target.value)}
				/>
				<Counter amount={amount} setAmount={setAmount} />
				<Button
					variant="outlined"
					color="primary"
					onClick={() => handleSearch()}
				>
					Search!
				</Button>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				{ingridientInfo && (
					<IngridientInfo ingridient={ingridientInfo} />
				)}
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<FormControl component="fieldset">
					<FormLabel component="legend">Meal</FormLabel>
					<RadioGroup
						aria-label="meal"
						name="meal"
						value={meal}
						onChange={(e) => setMeal(e.target.value)}
					>
						<FormControlLabel
							value={MealsEnum.Breakfast}
							control={<Radio />}
							label="Breakfast"
						/>
						<FormControlLabel
							value={MealsEnum.Lunch}
							control={<Radio />}
							label="Lunch"
						/>
						<FormControlLabel
							value={MealsEnum.Dinner}
							control={<Radio />}
							label="Dinner"
						/>
					</RadioGroup>
				</FormControl>
				{/* <TextField
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
				</TextField> */}
				<Button
					variant="outlined"
					color="primary"
					onClick={() =>
						setIngridientList((oldList) => {
							const newList = [...oldList];
							newList[meal].push(ingridientInfo);
							return newList;
						})
					}
				>
					Add to meal's menu ff
				</Button>
			</div>
		</>
	);
};

export default Search;
