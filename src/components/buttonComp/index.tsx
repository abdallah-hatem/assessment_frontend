import { Button } from "@mui/material";

interface Props {
  style?: object;
  title?: string;
  variant?: "contained" | "outlined" | "text";
}
export default function ButtonComp({
  style,
  title,
  variant = "contained",
}: Props) {
  return (
    <Button
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
