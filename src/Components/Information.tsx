import React from "react";
import clsx from "clsx";
import classes from "./Information.module.scss";

const Information = () => {
	return (
		<div className={classes.infoGrid}>
			<div className={classes.title}>IP ADDRESS</div>
			<div className={classes.title}>LOCATION</div>
			<div className={classes.title}>TIMEZONE</div>
			<div className={clsx(classes.title, classes.noBorder)}>ISP</div>
			<div className={classes.content}>192.212.174.101 </div>
			<div className={classes.content}>Brooklyn, NY 10001</div>
			<div className={classes.content}>UTC -05:00</div>
			<div className={clsx(classes.content, classes.noBorder)}>
				SpaceX Starlink
			</div>
		</div>
	);
};

export default Information;
