// Import Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Import Helpers
import store from "./ReduxStore/Store";

// Import Component
import App from "./App";

// Import Styles
import "./Index.scss";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,

	document.getElementById("root")
);
