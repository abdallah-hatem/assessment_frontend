import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  index?: number;
  targetItem?: number;
  setTargetItem?: Function;
  icon?: any;
  title?: string;
  disabled?: boolean;
  path?: string;
}
export default function ListItemComp({
  index,
  setTargetItem = () => "",
  targetItem,
  icon,
  title,
  disabled,
  path,
}: Props) {
  const navigate = useNavigate();

  function handleClick() {
    if (path) return navigate(path, { replace: true });
  }

  return (
    <ListItem
      disabled={disabled}
      sx={{ ":hover": { backgroundColor: "white" } }}
      disablePadding
      onClick={handleClick}
    >
      <ListItemButton
        tabIndex={index}
        onMouseEnter={(e) => setTargetItem(e.currentTarget.tabIndex)}
        onMouseLeave={(e) => setTargetItem(-1)}
        style={{ color: index === targetItem ? "#1E90FF" : "white" }}
      >
        <ListItemIcon
          style={{ color: index === targetItem ? "#1E90FF" : "white" }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}
