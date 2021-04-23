import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snackbar = (props) => {
	return (
		<Snackbar
			open={props.open}
			autoHideDuration={5000}
			onClose={props.onClose}
		>
			<MuiAlert
				elevation={5}
				variant="filled"
				onClose={props.onClose}
				severity={props.severity}
			>
				{props.message}
			</MuiAlert>
		</Snackbar>
	);
};

export default Snackbar;
