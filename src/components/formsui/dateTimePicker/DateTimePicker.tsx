import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface DateTimePickerProps {
  name: string;
  label: string;
}
const DateTimePicker = ({
  name,
  label,
  ...otherProps
}: DateTimePickerProps) => {
  const [field, meta] = useField(name);
  const configDateTimePicker: TextFieldProps = {
    type: "date",
    ...field,
    ...otherProps,
    size: "small",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }
  return <TextField {...configDateTimePicker}></TextField>;
};

export default DateTimePicker;
