import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface TextInputProps extends TextFieldProps {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...rest }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      {...rest}
    />
  );
};

export default TextInput;
