import React from "react";
import TextField from "@material-ui/core/TextField";

const Counter = ({ amount, setAmount }) => {
	return (
		<TextField
			id="outlined-number"
			label="Amount"
			type="number"
			value={amount}
			onChange={(e) => setAmount(e.target.value)}
			InputLabelProps={{
				shrink: true,
			}}
			variant="outlined"
		/>
	);
};

export default Counter;
