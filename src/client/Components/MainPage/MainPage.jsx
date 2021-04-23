import React, { useState } from "react";
import axios from "../../axios";
import creds from "../../apikey.json";
import Counter from "../Counter/Counter";
import MenuBuilder from "../MenuBuilder/MenuBuilder";

import { Button, TextField } from "@material-ui/core";

const MainPage = (props) => {
	const [ingridient, setIngridient] = useState("");
	const [ingridientInfo, setIngridientInfo] = useState(null);
	const [amount, setAmount] = useState(0);
	const [open, setOpen] = useState(false);

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
					amount: amount,
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
			{ingridientInfo && (
				<MenuBuilder
					ingridientInfo={ingridientInfo}
					open={open}
					setOpen={setOpen}
				/>
			)}
		</>
	);
};

export default MainPage;
