import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Label from "../Label/index.js";
import Icon from "../Icon/index.js";

class TextField extends Component {
	renderInput({
		instructions,
		prefix,
		suffix,
		error,
		readOnly,
		icon,
		disabled
	}) {
		let inputClassNames = classNames(
			this.props.className,
			"dmr-text__input",
			{ "dmr-text__input--read-only": readOnly },
			{ "dmr-text__input--error": error },
			{ "dmr-text__input--hasPrefix": prefix },
			{ "dmr-text__input--hasSuffix": suffix },
			{ "dmr-text__input--hasIcon": icon }
		);

		let inputHolderClassNames = classNames(
			"dmr-text__input__holder",
			{ "dmr-text__input__holder--withError": error },
			{ "dmr-text__input__holder--withIcon": icon },
			{ "dmr-text__input__holder--withDisabled": disabled },
			{ "dmr-text__input__holder--withPrefix": prefix },
			{ "dmr-text__input__holder--withSuffix": suffix },
			{ "dmr-text__input__holder--withCustomWidth": this.props.width }
		);

		let iconColor = !this.props.iconColor
			? (iconColor = "#333333")
			: (iconColor = this.props.iconColor);

		const inputStyles = {
			maxWidth: this.props.width
		};

		let errorMsg = error && (
			<span className="dmr-text__input--has-error">{this.props.error}</span>
		);

		let prefixMsg = prefix && (
			<span className="dmr-text__input__prefix">{this.props.prefix}</span>
		);

		let suffixMsg = suffix && (
			<span className="dmr-text__input__suffix">{this.props.suffix}</span>
		);

		let instructionMsg = instructions && (
			<span className="dmr-text__input__instructions">
				{this.props.instructions}
			</span>
		);

		return (
			<React.Fragment>
				<div className={inputHolderClassNames}>
					{prefixMsg}
					{this.props.icon ? (
						<div className="iconHolder">
							<Icon
								icon={this.props.icon}
								color={iconColor}
								width="20"
								height="20"
							/>
						</div>
					) : null}
					<input
						type={this.props.type}
						name={this.props.name}
						value={this.props.value}
						style={inputStyles}
						placeholder={this.props.placeholder}
						label={this.props.label}
						prefix={this.props.prefix}
						suffix={this.props.suffix}
						instructions={this.props.instructions}
						className={inputClassNames}
						error={this.props.error}
						required={this.props.required}
						readOnly={this.props.readOnly}
						disabled={this.props.disabled}
						onChange={this.props.onChange}
						{...this.props}
					/>
					{suffixMsg}
				</div>
				{errorMsg}
				{instructionMsg}
			</React.Fragment>
		);
	}

	render() {
		const { label, required, disabled } = this.props;

		const inputContainerClasses = classNames("dmr-text__input__container", {
			"dmr-text__input__holder--withCustomWidth": this.props.width
		});

		if (label) {
			return (
				<div className={inputContainerClasses}>
					<Label
						isDisabled={disabled}
						isRequired={required}
						labelText={label}
					/>
					{this.renderInput(this.props)}
				</div>
			);
		}

		return this.renderInput(this.props);
	}
}

TextField.propTypes = {
	/** Input name as a string */
	name: PropTypes.string,
	/** Error message as a string */
	error: PropTypes.string,
	/** prefix text as a string */
	prefix: PropTypes.string,
	/** suffix text as a string */
	suffix: PropTypes.string,
	/** Prevents input from being modified and appears disabled */
	disabled: PropTypes.bool,
	/** Prevents input from being modified but doesn't appear disabled */
	readOnly: PropTypes.bool,
	/** Prevents input from being submitted without value */
	required: PropTypes.bool,
	/** Text that describes the input */
	label: PropTypes.string,
	/** Icon name as string */
	icon: PropTypes.string,
	/** ClassNames as a string */
	classNames: PropTypes.string,
	/** ClassName as a string */
	className: PropTypes.string,
	/** Icon color as string */
	iconColor: PropTypes.string,
	/** Input instructions text */
	instructions: PropTypes.string,
	/** Input placeholder text */
	placeholder: PropTypes.string,
	/** Input onChange function */
	onChange: PropTypes.func,
	/** Supported input types */
	type: PropTypes.oneOf(["text", "password", "date", "number", "email"]),
	/** Accepts string and number as value */
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TextField;
