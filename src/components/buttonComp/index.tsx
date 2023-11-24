import { Button } from "@mui/material";

interface Props {
  style?: object;
  title?: string;
  variant?: "contained" | "outlined" | "text";
  onClick?: Function;
}
export default function ButtonComp({
  style,
  title,
  variant = "contained",
  onClick = () => "",
}: Props) {
  return (
    <Button
      onClick={() => onClick()}
      variant={variant}
      style={{
        backgroundColor: variant !== "outlined" ? "rgb(30, 144, 255)" : "",
        ...style,
      }}
    >
      {title}
    </Button>
  );
}
