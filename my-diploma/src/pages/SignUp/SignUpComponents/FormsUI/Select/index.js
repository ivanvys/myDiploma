import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectForm = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    onChange: handleChange,
    helperText: "Please select your gender",
  };

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, index) => {
        return (
          <MenuItem key={index} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectForm;
