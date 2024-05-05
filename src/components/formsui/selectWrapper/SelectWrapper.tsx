import { TextField, MenuItems } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface SelectWrapperProps {
  name: string;
  options: Record<string, any>[];
  select?: boolean;
  variant?: "outlined" | "filled" | "standard ";
  fullWidth?: "true" | "false";
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // ...otherProps
}

const SelectWrapper = ({
  name,
  options,
  select,
  variant,
  fullWidth,
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
  const configSelect = {
    ...field,
    ...otherProps,
    select: select ?? true,
    variant: variant ?? "outlined",
    fullWidth: fullWidth ?? "true",
    label: label ?? "",
    onChange: handleOnchange,
  };

  return <TextField />;
};

export default SelectWrapper;
