import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import TextField from "./index";
import Button from "../Button/index";

const stories = storiesOf("Atoms/Text Field", module);
stories
	.addDecorator(withKnobs)
	.addDecorator(story => <div id="root-preview">{story()}</div>);

// text input
stories.add(
	"Default",
	withInfo()(() => {
		return (
			<TextField
				name="input"
				type={select(
					"Type",
					{
						text: "text",
						password: "password",
						date: "date",
						number: "number",
						email: "email"
					},
					"text"
				)}
				placeholder="Type some text..."
				disabled={boolean("Disabled", false)}
				readOnly={boolean("Read Only", false)}
				required={boolean("Required", false)}
				label={text("Label", "Label")}
				icon="SEARCH"
				prefix={text("Prefix", "https://")}
				suffix={text("Suffix", ".com")}
				error={text("Error", "Error messagge.")}
				instructions={text("Instructions", "Instructions goes here...")}
			/>
		);
	})
);