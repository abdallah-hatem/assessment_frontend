import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "./navbar";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import SideBar from "./sidebar";

const drawerWidth = 240;

interface Props {
  children?: ReactJSXElement;
}

export default function Layout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const styleMainContainer = {
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    backgroundColor: "#EDEDED",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      {/* Main Container */}
      <Box component="main" sx={styleMainContainer}>
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
