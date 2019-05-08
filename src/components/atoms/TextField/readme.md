# Text Field

To use the Text Field component it is necessary to import it first. Then we call it in the following way:

```
<TextField />;
```

# How to use

In the example below we can see how props are used and what their meaning is:

```
<TextField
    name="input"                        // defines Text Field name
    type="text"                         // defines Text Field type (text, password, date, number, email)
    placeholder="Type some text..."     // defines Text Field placeholder
    disabled={false}                    // defines if input is disabled or not
    className="customClass"             // defines custom class name
    readOnly={false}                    // defines if input is read-only or not
    required={false}                    // defines if input is required or not
    label="My label"                    // defines label text
    icon="SEARCH"                       // defines icon inside input
    iconColor="#000"                    // defines icon color. if this prop is not defined default color is #333333
    prefix="https://"                   // defines if input has prefix
    suffix=".com"                       // defines if input has suffix
    error="Error message goes here."    // defines if input has prefix
    instructions="Instructions for the field are going here (also multiline)"  // defines input instructions
    )}
/>
```
