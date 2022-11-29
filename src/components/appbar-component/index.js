import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material";
import muiTheme from "../../../.storybook/muiTheme";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { PropTypes } from "prop-types";
import LogoPart2 from "../../assets/images/LifeSphere.svg";
import LogoPart1 from "../../assets/images/Vector.svg";

export const AppBarsBasic = (props) => {
  const {
    label,
    buttonLabel,
    icon,
    position,
    color,
    variant,
    showButton,
    showSearchBar,
  } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position={position} color={color}>
          <Toolbar variant={variant}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              {icon}
            </IconButton>
            <Box sx={{ ml: 1 }}>
              <img src={LogoPart1} />
              <img src={LogoPart2} style={{ marginLeft: "10px" }} />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              {label}
            </Typography>
            {showSearchBar && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            {showButton && <Button color="inherit">{buttonLabel}</Button>}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

AppBarsBasic.prototype = {
  color: PropTypes.oneOf([
    "default",
    "error",
    "info",
    "inherit",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  variant: PropTypes.oneOf(["dense", "regular"]),
  position: PropTypes.oneOf([
    "absolute",
    "static",
    "fixed",
    "sticky",
    "relative",
  ]),
  buttonLabel: PropTypes.node,
  label: PropTypes.node,
};

AppBarsBasic.defaultProps = {
  color: "primary",
  variant: "regular",
  position: "static",
  buttonLabel: "",
  label: "",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
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

const PrimaryStyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const AppBarsWithPrimarySearch = (props) => {
  const { label, icon, accountIcon, iconArray, color, menuItems, position } =
    props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
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
      {menuItems.map((menu) => (
        <MenuItem onClick={handleMenuClose}>{menu}</MenuItem>
      ))}
    </Menu>
  );

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
      <MenuItem>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <PrimaryStyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {iconArray.map((icons) => (
          <IconButton size="large" color="inherit">
            <Badge badgeContent={icons.badgeContent} color="error">
              {icons.icon}
            </Badge>
          </IconButton>
        ))}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {accountIcon}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position={position} color={color}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              {icon}
            </IconButton>
            <Box sx={{ ml: 1, flexGrow: 0 }}>
              <img src={LogoPart1} />
              <img src={LogoPart2} style={{ marginLeft: "10px" }} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}
            >
              {label}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <PrimaryStyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {iconArray.map((icons) => (
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={icons.badgeContent} color="secondary">
                    {icons.icon}
                  </Badge>
                </IconButton>
              ))}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {accountIcon}
              </IconButton>
            </Box>
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
    </ThemeProvider>
  );
};

AppBarsWithPrimarySearch.prototype = {
  color: PropTypes.oneOf([
    "default",
    "error",
    "info",
    "inherit",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  position: PropTypes.oneOf([
    "absolute",
    "static",
    "fixed",
    "sticky",
    "relative",
  ]),
  label: PropTypes.node,
  iconArray: PropTypes.array,
  menuItems: PropTypes.array,
};

export const AppBarsBottom = (props) => {
  const { messages, position, mainLabel, subLabel, icon, iconsArray, color } =
    props;
  return (
    <ThemeProvider theme={muiTheme}>
      <React.Fragment>
        <CssBaseline />
        <Paper square sx={{ pb: "50px" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ p: 2, pb: 0 }}
          >
            {mainLabel}
          </Typography>

          <List sx={{ mb: 2 }}>
            {messages.map(({ id, primary, secondary, person }) => (
              <React.Fragment key={id}>
                {subLabel.map(
                  (sublabels) =>
                    id === sublabels.id && (
                      <ListSubheader sx={{ bgcolor: "background.paper" }}>
                        {sublabels.label}
                      </ListSubheader>
                    )
                )}
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
        <AppBar
          position={position}
          color={color}
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              {icon}
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />
            {iconsArray.map((icons) => (
              <IconButton color="inherit" href={icons.href}>
                {icons.icon}
              </IconButton>
            ))}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </ThemeProvider>
  );
};
AppBarsBottom.prototype = {
  color: PropTypes.oneOf([
    "default",
    "error",
    "info",
    "inherit",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  position: PropTypes.oneOf([
    "absolute",
    "static",
    "fixed",
    "sticky",
    "relative",
  ]),
  mainLabel: PropTypes.array,
  subLabel: PropTypes.array,
  messages: PropTypes.array,
  iconsArray: PropTypes.array,
  menuItems: PropTypes.array,
};

AppBarsBottom.defaultProps = {
  position: "sticky",
  color: "primary",
  mainLabel: [],
  subLabel: [],
  messages: [],
  iconsArray: [],
  menuItems: [],
};

export const AppBarsResponsive = (props) => {
  const { pages, settings, src, label, position, color, icon, href } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar position={position} color={color}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {icon}
            <Box href={href} sx={{ ml: 3 }}>
              <img src={LogoPart1} />
              <img src={LogoPart2} style={{ marginLeft: "10px" }} />
            </Box>
            <Typography variant="h6" noWrap component="a" sx={{ ml: 2, mr: 2 }}>
              {label}
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, ml: 6 }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="" src={src} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

AppBarsResponsive.prototype = {
  color: PropTypes.oneOf([
    "default",
    "error",
    "info",
    "inherit",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  position: PropTypes.oneOf([
    "absolute",
    "static",
    "fixed",
    "sticky",
    "relative",
  ]),
  label: PropTypes.node,
  href: PropTypes.String,
  pages: PropTypes.array,
  settings: PropTypes.array,
};

AppBarsResponsive.defaultProps = {
  position: "static",
  color: "primary",
  label: "",
  href: "",
  pages: [],
  settings: [],
};
