import { IconProps, styled, TextField, TextFieldProps } from "@mui/material";
import { transform } from "next/dist/build/swc";
import { relative } from "path";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => {
  console.log(theme);
  return {
    "& .MuiInputLabel-root": {
      transform: "none",
      lineHeigh: 1.2,
      position: "relative",
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.body2.fontSize,
    },
  };
});
const CustomTextField = (props: TextFieldProps) => {
  const {
    size = "small",
    InputLabelProps,
    variant = "filled",
    ...rests
  } = props;

  return (
    <TextFieldStyled
      size={size}
      variant={variant}
      InputLabelProps={{ ...InputLabelProps }}
      {...rests}
    />
  );
};

export default CustomTextField;
