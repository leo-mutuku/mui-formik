import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface TextFieldWrapperProps {
  name: string;
  label?: string;
  variant?: "standard" | "outlined" | "filled";
  // other props
}

const TextFieldWrapper = ({
  name,
  label,
  variant,
  ...otherProps
}: TextFieldWrapperProps) => {
  const [field, meta] = useField(name);
  const configTextField: TextFieldProps = {
    ...field,
    ...otherProps,
    size: "small",
    fullWidth: true,
    variant: variant ?? "outlined",
    label: label,
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <>
      <TextField {...configTextField} />
    </>
  );
};

export default TextFieldWrapper;
