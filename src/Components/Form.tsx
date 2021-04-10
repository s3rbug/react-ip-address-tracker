import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";
import classes from "./Form.module.scss";

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = (values: any) => console.log(values);

	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
			<input
				className={classes.ipInput}
				placeholder="Search for any IP address or domain"
				{...register("ip", { required: true })}
			/>
			<button className={classes.submit} type="submit">
				<IconArrow />
			</button>
		</form>
	);
};

export default Form;
