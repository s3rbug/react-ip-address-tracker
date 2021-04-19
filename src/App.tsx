import React from "react";
import "./App.scss";
import TopMenu from "./Components/TopMenu";
import Map from "./Components/Map";
import Notification from "./Components/Notification";

function App() {
	return (
		<>
			<TopMenu />
			<Map />
			<Notification />
		</>
	);
}

export default App;
