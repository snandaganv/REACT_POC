import React from "react";
import { PropTypes } from "prop-types";
import { Menu } from "@mui/material";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import {
  Box,
  Paper,
  MenuList,
  MenuItem,
  Typography,
  Icon,
  Divider,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";

export const MenusBasic = ({ label, menulist }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Button onClick={handleClick} style={{ textTransform: "capitalize" }}>
          {label}
        </Button>
      </ThemeProvider>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menulist.map((item) => (
          <MenuItem onClick={handleClose} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

MenusBasic.propTypes = {
  label: PropTypes.string,
  dense: PropTypes.bool,
};

export const MenusDense = ({
  dense,
  densetext,
  densetext1,
  denseicon,
  autoFocus,
  disableGutters,
  divider,
}) => {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense={dense} autoFocus={autoFocus}>
        {denseicon.map((item) => (
          <MenuItem disableGutters={disableGutters} divider={divider}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
        <Divider />
        {densetext.map((item) => (
          <MenuItem disableGutters={disableGutters}>
            <ListItemText>{item.textspacaf}</ListItemText>
          </MenuItem>
        ))}
        {densetext1.map((item) => (
          <MenuItem disableGutters={disableGutters}>
            <ListItemText>{item.textspacbf}</ListItemText>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
MenusDense.propTypes = {
  dense: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disableGutters: PropTypes.bool,
  divider: PropTypes.bool,
};

export const MenusIcon = ({ menuiconData, menuclip }) => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        {menuiconData.map((item) => (
          <MenuItem>
            <ListItemIcon fontSize="small">{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              {item.typography}
            </Typography>
          </MenuItem>
        ))}
        <Divider />
        {menuclip.map((item) => (
          <MenuItem>
            <ListItemIcon fontSize="small">{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

MenusIcon.propTypes = {
  menuiconData: PropTypes.array,
  menuclip: PropTypes.array,
};

export const MenusSimpleList = (props) => {
  const { options } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItem button onClick={handleClickListItem}>
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
MenusSimpleList.propTypes = {
  options: PropTypes.array,
};

export const MenusAccount = (props) => {
  const { menuData, menuAccountData, menuLabel } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {menuLabel.map((label) => (
          <Typography sx={{ minWidth: 100 }}>{label}</Typography>
        ))}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuData.map((data) => (
          <MenuItem>
            {data.icon} {data.label}
          </MenuItem>
        ))}
        <Divider />
        {menuAccountData.map((data) => (
          <MenuItem>
            <ListItemIcon>{data.icon}</ListItemIcon>
            {data.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};
MenusAccount.propTypes = {
  menuLabel: PropTypes.array,
  menuData: PropTypes.array,
  menuAccountData: PropTypes.array,
};
const ITEM_HEIGHT = 48;

export const MenusLong = (props) => {
  const { option, icon } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>{icon}</IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {option.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
MenusLong.propTypes = {
  option: PropTypes.array,
};

export const MenusTypography = ({ typomenus }) => {
  return (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        {typomenus.map((item) => (
          <MenuItem>
            <ListItemIcon fontSize="small">{item.icon}</ListItemIcon>
            <Typography variant="inherit">{item.label}</Typography>
            <Typography variant="inherit" noWrap>
              {item.textlbl}
            </Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};
MenusTypography.propTypes = {
  typomenus: PropTypes.array,
};

export const MenusPositioned = ({ menulist, label }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Button onClick={handleClick} style={{ textTransform: "capitalize" }}>
          {label}
        </Button>
      </ThemeProvider>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {menulist.map((item) => (
          <MenuItem onClick={handleClose} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
MenusPositioned.propTypes = {
  menulist: PropTypes.array,
  label: PropTypes.array,
};
export const MenusContext = ({ typo, contxtmenu }) => {
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      {typo.map((item) => (
        <Typography>{item.label} </Typography>
      ))}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        {contxtmenu.map((item) => (
          <MenuItem onClick={handleClose} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
MenusContext.propTypes = {
  typo: PropTypes.array,
  contxtmenu: PropTypes.array,
};
