import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ingridientInfo = (props) => {
	return (
		<TableContainer style={{ width: "30%" }} component={Paper}>
			<Table size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>Nutritions Specs</TableCell>
						<TableCell align="right">Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.ingridient.nutritions.map((nut) => (
						<TableRow key={nut.name}>
							<TableCell component="th" scope="row">
								{nut.name}
							</TableCell>
							<TableCell align="right">
								{nut.amount}
								{nut.unit}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ingridientInfo;
