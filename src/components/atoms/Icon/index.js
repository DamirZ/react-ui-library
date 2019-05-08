import React from "react";
import PropTypes from "prop-types";
import { ICONS } from "./iconPack.js";

const Icon = props => {
	const styles = {
		path: {
			fill: props.color
		}
	};

	// check if className prop. defined
	let customClassName = props.className ? props.className : "";

	// add icon class name based on icon name
	const iconClassName =
		`dmr-svg__icon icon-${props.icon}`.toLowerCase() + " " + customClassName;

	return (
		<svg
			className={iconClassName}
			color={props.color}
			width={`${props.width}`}
			height={`${props.height}`}
			name={props.name}
			onClick={props.onClick}
		>
			<path style={styles.path} d={`${ICONS[props.icon]}`} />
		</svg>
	);
};

Icon.defaultProps = {
	width: "17",
	height: "17",
	color: "#000",
	name: "svg"
};

Icon.propTypes = {
	/** Describes svg's name */
	name: PropTypes.string,
	/** Describes svg's viewBox */
	viewBox: PropTypes.string,
	/** Describes svg's icon */
	icon: PropTypes.string,
	/** Describes svg's color */
	color: PropTypes.string,
	/** Describes svg's width */
	width: PropTypes.string,
	/** Describes svg's height */
	height: PropTypes.string
};

export default Icon;
