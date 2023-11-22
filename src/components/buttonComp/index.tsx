import { Button } from "@mui/material";

interface Props {
  style?: object;
  title?:string
}
export default function ButtonComp({ style ,title}: Props) {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: " rgb(30, 144, 255)", ...style }}
    >
      {title}
    </Button>
  );
}
