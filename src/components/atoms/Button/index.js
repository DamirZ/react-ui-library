import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../Icon/index.js";
import SpinnerLight from "./spinner-light.svg";
import SpinnerDark from "./spinner-dark.svg";

const Button = ({
	className,
	name,
	isSubmit = false,
	children,
	isDisabled = false,
	onBlur,
	onClick,
	onMouseDown,
	size,
	style,
	icon,
	typeAppereance,
	width,
	notifications,
	text,
	loading
}) => {
	const classes = classNames({
		"dmr-button": true,
		[`dmr-button--${style}`]: style,
		[`dmr-button--${size}`]: size,
		[`dmr-button--${width}`]: width,
		[`dmr-button--${typeAppereance}`]: icon,
		[`dmr-button--loading`]: loading
	});

	let iconColor =
		style === "primary" ? (iconColor = "#fff") : (iconColor = "#000");

	const customClassName = className ? className : "";

	const type = isSubmit ? "submit" : "button";

	const loadingSpinner = style === "primary" ? SpinnerLight : SpinnerDark;

	const showSpinner = loading ? <img src={loadingSpinner} /> : null;

	let myIcon = icon && (
		<Icon icon={icon} width="14" height="15" color={iconColor} />
	);

	let buttonType =
		typeAppereance === "icon" || typeAppereance === "command"
			? (buttonType = myIcon)
			: null;

	let showNotification =
		buttonType === myIcon && notifications > 0
			? (showNotification = (
					<span className="dmr-button__notification">
						{
							(notifications =
								notifications > 9 ? (notifications = "9+") : notifications)
						}
					</span>
			  ))
			: null;

	if (loading) {
		return (
			<button className={classes} name={name} disabled={isDisabled}>
				{showSpinner}
				{text}
				{buttonType}
			</button>
		);
	} else {
		return (
			<button
				className={`${classes} ${customClassName}`}
				name={name}
				disabled={isDisabled}
				type={type}
				onBlur={onBlur}
				onClick={onClick}
				type-appereance={typeAppereance}
				onMouseDown={onMouseDown}
			>
				{buttonType}
				{text}
				{showNotification}
				{children}
			</button>
		);
	}
};

Button.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
	isDisabled: PropTypes.bool,
	icon: PropTypes.string,
	notifications: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isSubmit: PropTypes.bool,
	onBlur: PropTypes.func,
	onClick: PropTypes.func,
	onMouseDown: PropTypes.func,
	size: PropTypes.oneOf(["small", "normal", "big"]),
	style: PropTypes.oneOf(["standard", "primary", "ghost", "link"]),
	typeAppereance: PropTypes.oneOf(["simple", "command", "icon"]),
	width: PropTypes.oneOf(["default", "full"])
};

export default Button;
