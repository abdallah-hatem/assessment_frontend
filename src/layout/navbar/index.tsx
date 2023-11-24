import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./style.css";

// Search bar style //
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface Props {
  handleDrawerToggle?: Function;
  drawerWidth?: number;
}

export default function Navbar({
  handleDrawerToggle = () => "",
  drawerWidth,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const [lang, setLang] = useState(true);

  const iconbtnsMobile: any[] = [
    { icon: <MailIcon />, title: "Messages" },
    { icon: <NotificationsIcon />, title: "Notifications" },
    {
      icon: <AccountCircle />,
      onClick: handleProfileMenuOpen,
      ariaControls: "primary-search-account-menu",
      title: "Profile",
    },
    {
      icon: <LanguageIcon />,
      onClick: () => {
        setLang((prev) => !prev);
        lang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
      },
      edge: "end",
      title: "Lang",
    },
  ];

  // Mobile
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {iconbtnsMobile.map((el, index) => (
        <MenuItem key={index} onClick={el.onClick}>
          <IconButton
            size="large"
            // aria-label="account of current user"
            aria-controls={el.ariaControls}
            aria-haspopup="true"
            color="inherit"
          >
            {el.icon}
          </IconButton>
          <p>{el.title}</p>
        </MenuItem>
      ))}
    </Menu>
  );

  const [t, i18n] = useTranslation();
  const iconbtns: any[] = [
    { icon: <MailIcon /> },
    { icon: <NotificationsIcon /> },
    {
      icon: <AccountCircle />,
      onClick: handleProfileMenuOpen,
      ariaControls: menuId,
      // edge: "end",
    },
    {
      icon: <LanguageIcon />,
      onClick: () => {
        setLang((prev) => !prev);
        lang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
      },
      ariaControls: menuId,
      edge: "end",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          color: "black",
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          {/* Hamburger menu button available in mobiel view */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Nav Logo */}
          <Typography
            style={{ cursor: "pointer", fontSize: 35, fontWeight:650 }}
            onClick={() => navigate("/", { replace: true })}
            sx={{ display: { xs: "none", sm: "block" } }}
            variant="h6"
            noWrap
            // component="div"
            className="nav-logo"
          >
            {t("Welcome Talia")}
          </Typography>

          {/* spacing */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Search bar */}
          <Search style={{ borderRadius: "20px", border: "1px solid #1E90FF" }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#1E90FF" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Nav buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {iconbtns.map((el, index) => (
              <IconButton
                size="large"
                edge={el.edge}
                // aria-label="account of current user"
                aria-controls={el.ariaControls}
                // aria-haspopup="true"
                onClick={el.onClick}
                color="inherit"
                key={index}
                style={{ color: "#1E90FF" }}
              >
                {!el.ariaControls ? (
                  <Badge badgeContent={17} color="error">
                    {el.icon}
                  </Badge>
                ) : (
                  el.icon
                )}
              </IconButton>
            ))}
          </Box>

          {/* Menu button availble for mobile view */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
