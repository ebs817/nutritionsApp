import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snackbar = (props) => {
	return (
		<Snackbar
			open={props.open}
			autoHideDuration={2000}
			onClose={props.onClose}
		>
			<MuiAlert
				elevation={2}
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
