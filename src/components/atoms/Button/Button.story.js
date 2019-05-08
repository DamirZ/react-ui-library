import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Button from "./index";

const stories = storiesOf("Atoms/Button", module);
stories
	.addDecorator(withKnobs)
	.addDecorator(story => <div id="root-preview">{story()}</div>);

// simple button
stories.add(
	"Simple",
	withInfo()(() => {
		return (
			<Button
				name="button"
				style={select(
					"Style",
					{
						standard: "standard",
						primary: "primary",
						ghost: "ghost",
						link: "link"
					},
					"primary"
				)}
				isDisabled={boolean("Disable", false)}
				loading={boolean("Loading", false)}
				width={select(
					"Width",
					{
						default: "default",
						full: "full"
					},
					"default"
				)}
				typeAppereance={select(
					"Appereance",
					{
						simple: "simple"
					},
					"simple"
				)}
				size={select(
					"Size",
					{
						small: "small",
						normal: "normal",
						big: "big"
					},
					"normal"
				)}
				text={text("Text", "Primary Button")}
				isSubmit
			/>
		);
	})
);

// command button
stories.add(
	"Command",
	withInfo()(() => {
		return (
			<Button
				style={select(
					"Style",
					{
						standard: "standard",
						primary: "primary",
						ghost: "ghost"
					},
					"primary"
				)}
				isDisabled={boolean("Disable", false)}
				loading={boolean("Loading", false)}
				icon={"USER"}
				width={select(
					"Width",
					{
						default: "default",
						full: "full"
					},
					"default"
				)}
				typeAppereance={select(
					"Appereance",
					{
						command: "command"
					},
					"command"
				)}
				size={select(
					"Size",
					{
						small: "small",
						normal: "normal",
						big: "big"
					},
					"normal"
				)}
				text={text("Text", "Command Button")}
			/>
		);
	})
);

// icon button
stories.add(
	"Icon",
	withInfo()(() => {
		return (
			<Button
				style={select(
					"Style",
					{
						standard: "standard",
						primary: "primary",
						ghost: "ghost"
					},
					"primary"
				)}
				isDisabled={boolean("Disable", false)}
				loading={boolean("Loading", false)}
				width={select(
					"Width",
					{
						default: "default",
						full: "full"
					},
					"default"
				)}
				icon={"USER"}
				typeAppereance={select(
					"Appereance",
					{
						icon: "icon"
					},
					"icon"
				)}
				size={select(
					"Size",
					{
						small: "small",
						normal: "normal",
						big: "big"
					},
					"normal"
				)}
			/>
		);
	})
);

// ghost button
stories.add(
	"Ghost",
	withInfo()(() => {
		return (
			<Button
				style={select(
					"Style",
					{
						standard: "standard",
						primary: "primary",
						ghost: "ghost"
					},
					"ghost"
				)}
				isDisabled={boolean("Disable", false)}
				loading={boolean("Loading", false)}
				width={select(
					"Width",
					{
						default: "default",
						full: "full"
					},
					"default"
				)}
				typeAppereance={select(
					"Appereance",
					{
						simple: "simple"
					},
					"simple"
				)}
				size={select(
					"Size",
					{
						small: "small",
						normal: "normal",
						big: "big"
					},
					"normal"
				)}
				text={text("Text", "Ghost Button")}
			/>
		);
	})
);
