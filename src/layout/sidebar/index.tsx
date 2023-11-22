import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Home from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CampaignIcon from "@mui/icons-material/Campaign";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import ListItemComp from "./listItem";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  drawerWidth?: number;
  handleDrawerToggle?: Function;
  mobileOpen?: boolean;
}

interface Items {
  title: string;
  path?: string;
  icon?: ReactJSXElement;
  disabled?: boolean;
}
export default function SideBar({
  drawerWidth,
  handleDrawerToggle = () => "",
  mobileOpen,
}: Props) {
  const [targetItem, setTargetItem] = useState<number>(-1);
  const loggedUser = useSelector((state: any) => state.user.loggedIn);

  const items: Items[] = [
    {
      title: "Dashbaord",
      icon: <Home />,
      disabled: !loggedUser,
      path: "dashboard",
    },
    { title: "Schedule", icon: <CalendarMonthIcon /> },
    { title: "Courses", icon: <MenuBookIcon /> },
    { title: "GradeBook", icon: <SchoolIcon /> },
    { title: "Performance", icon: <TrendingUpIcon /> },
    { title: "Announcement", icon: <CampaignIcon /> },
  ];

  const gradientColor =
    "radial-gradient(circle at 10% 20%, rgb(0, 107, 141) 0%, rgb(0, 69, 91) 90%)";

  const drawerContent = (
    <div
      style={{
        background: gradientColor,
        height: "100vh",
      }}
    >
      <Toolbar>
        <Typography
          sx={{ textAlign: "center", margin: "auto", color: "white" ,fontSize:"40px"}}
        >
          Coligo
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {/* List items */}
        {items.map((el, index) => (
          <ListItemComp
            path={el.path}
            disabled={el.disabled}
            icon={el.icon}
            index={index}
            key={index}
            setTargetItem={setTargetItem}
            targetItem={targetItem}
            title={el.title}
          />
        ))}
      </List>
    </div>
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
      {drawerContent}
    </Drawer>
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
      {drawerContent}
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
