import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./Map.module.scss";

const Map = () => {
	return (
		<div className={classes.root}>
			<MapContainer
				className={classes.map}
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
		</div>
	);
};

export default Map;
