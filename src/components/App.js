import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import Home from "./Home";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LogIn} />
				<Route exact path="/home" component={Home} />
				<Route component={LogIn} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
