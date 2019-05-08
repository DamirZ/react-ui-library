import React from "react";
import PropTypes from "prop-types";

/**
 * @params {Object} props - Properties passed to component
 * @returns {ReactElement} - Returns Label component
 */

const Label = ({
	isRequired,
	isDisabled,
	labelText,
	children,
	className,
	name
}) => {
	/** Basic class for label */
	let classes = "dmr-label";

	if (isRequired) {
		classes += " dmr-label--required";
	}

	if (isDisabled) {
		classes += " dmr-label--disabled";
	}

	let customClassName = className ? className : "";

	return (
		<label name={name} className={classes + " " + customClassName}>
			<div className="dmr-label__text">{labelText}</div>
			{children}
		</label>
	);
};

Label.propTypes = {
	/** If you wrap Label around other component you determine placement of that component with this param  */
	children: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.node.isRequired
	]),
	/** Adds "*" after text to show if the input is required */
	isRequired: PropTypes.bool,
	/** Adds styling on label to help determine if the input is disabled */
	isDisabled: PropTypes.bool,
	/** Text for the label */
	labelText: PropTypes.string.isRequired
};

export default Label;
