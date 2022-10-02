import { TextField } from "@mui/material";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...othersProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...othersProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
