import { TextField, MenuItem, TextFieldProps } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface SelectWrapperProps {
  name: string;
  options: any;
  label?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // ...otherProps
}

const SelectWrapper = ({
  name,
  options,
  label,
  onChange,
  ...otherProps
}: SelectWrapperProps) => {
  const { setFieldValue } = useFormikContext();
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const [field, meta] = useField(name);
  const configSelect: TextFieldProps = {
    ...field,
    ...otherProps,
    select: true,
    size: "small",
    label,
    variant: "outlined",
    fullWidth: true,
    onChange: handleOnchange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((option: any, key: number) => (
        <MenuItem key={key} value={option}>
          {options[option]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectWrapper;
