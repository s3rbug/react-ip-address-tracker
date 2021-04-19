import React, { useEffect } from "react";
import clsx from "clsx";
import classes from "./Information.module.scss";
import { useTypedSelector } from "../redux/reduxStore";
import { useDispatch } from "react-redux";
import { updateIp } from "../redux/middleware/map";

const Information = () => {
	const info = useTypedSelector((state) => state.map);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateIp(null));
	}, [dispatch]);
	return (
		<div className={classes.info}>
			<div className={classes.wrap}>
				<div className={classes.title}>IP ADDRESS</div>
				<div className={classes.content}>{info.ip}</div>
			</div>
			<div className={classes.wrap}>
				<div className={classes.title}>LOCATION</div>
				<div className={classes.content}>{info.location}</div>
			</div>
			<div className={classes.wrap}>
				<div className={classes.title}>TIMEZONE</div>
				<div className={classes.content}>{info.timezone}</div>
			</div>
			<div className={classes.wrap}>
				<div className={clsx(classes.title, classes.noBorder)}>ISP</div>
				<div className={clsx(classes.content, classes.noBorder)}>
					{info.isp}
				</div>
			</div>
		</div>
	);
};

export default Information;
