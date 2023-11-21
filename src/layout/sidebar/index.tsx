import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Home from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CampaignIcon from "@mui/icons-material/Campaign";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Props {
  drawerWidth?: number;
  handleDrawerToggle?: Function;
  mobileOpen?: boolean;
}
export default function SideBar({
  drawerWidth,
  handleDrawerToggle = () => "",
  mobileOpen,
}: Props) {
  interface Items {
    title: string;
    path?: string;
    icon?: ReactJSXElement;
  }
  const items: Items[] = [
    { title: "Dashbaord", icon: <Home /> },
    { title: "Schedule", icon: <CalendarMonthIcon /> },
    { title: "Courses", icon: <MenuBookIcon /> },
    { title: "GradeBook", icon: <SchoolIcon /> },
    { title: "Performance", icon: <TrendingUpIcon /> },
    { title: "Announcement", icon: <CampaignIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {items.map((el, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText primary={el.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const mobileDrawer = (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );

  const defaultDrawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={() => handleDrawerToggle()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawer}
    </Drawer>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {defaultDrawer}
      {mobileDrawer}
    </Box>
  );
}
