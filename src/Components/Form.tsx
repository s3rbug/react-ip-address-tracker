import React from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";
import validator from "ip-validator";
import classes from "./Form.module.scss";

type FormReturnType = {
	ip: string;
};

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = (value: FormReturnType) => {
		console.log(value.ip, validator.ip(value.ip));
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
			<input
				className={classes.ipInput}
				placeholder="Search for any IP address or domain"
				{...register("ip", { required: true, validate: validator.ip })}
			/>
			{errors.ip && "Error"}
			<button className={classes.submit} type="submit">
				<IconArrow />
			</button>
		</form>
	);
};

export default Form;
