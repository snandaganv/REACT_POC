import React from "react";
import { PropTypes } from "prop-types";
import { Stack, Chip } from "@mui/material";
import { Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";
import Done from "@mui/icons-material/Done";
import Cancel from "@mui/icons-material/Cancel";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const ChipsBasics = ({
  label,
  onClick,
  variant,
  color,
  size,
  direction,
  icon,
  clickable,
  disabled,
  deleteIcon,
  onDelete,
  avatar,
}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction={direction} spacing={2}>
        <Chip
          label={label}
          variant={variant}
          color={color}
          size={size}
          onClick={onClick}
          clickable={clickable}
          disabled={disabled}
          icon={icon}
          deleteIcon={deleteIcon}
          onDelete={onDelete}
          avatar={avatar}
          style={{ textTransform: "capitalize" }}
        />
      </Stack>
    </ThemeProvider>
  );
};

ChipsBasics.propTypes = {
  label: PropTypes.node,
  variant: PropTypes.oneOf(["filled", "outlined"]),
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
};

export const ChipClickables = ({ onClick }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2} direction="row">
        <Stack direction="row" spacing={1}>
          <Chip label="Clickable" onClick={handleClick} color="primary" />
          <Chip
            label="Clickable"
            variant="outlined"
            color="primary"
            onClick={handleClick}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export const ChipsColors = ({ color }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
        <Chip label="error" color="error" />
        <Chip label="info" color="info" />
        <Chip label="warning" color="warning" />
      </Stack>
    </ThemeProvider>
  );
};

export const ChipSizes = ({ size }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip label="Small" size="small" color="primary" />
        <Chip label="Medium" size="medium" variant="outlined" color="primary" />
      </Stack>
    </ThemeProvider>
  );
};

export const ChipAvatars = ({ avatar }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" color="primary" />
        <Chip
          avatar={
            <Avatar alt="Natacha" src="https://i.pravatar.cc/150?img=32" />
          }
          label="Avatar"
          variant="outlined"
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
};

export const ChipIcons = ({ icon }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip icon={<Face />} label="With Icon" color="primary" />
        <Chip
          icon={<Face />}
          label="With Icon"
          variant="outlined"
          color="primary"
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<Done />}
          color="primary"
        />
        <Chip
          label="Custom delete icon"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<Done />}
          color="primary"
        />
        <Chip
          label="Custom delete icon"
          icon={<Face />}
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<Cancel />}
          color="primary"
        />
        <Chip
          icon={<Face />}
          label="Custom delete icon"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<Cancel />}
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
};

export const ChipClickableLinks = ({ clickable }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Clickable Link"
          component="a"
          href="https://design.arisglobal.com/agcomp/chip"
          clickable
          color="primary"
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="https://design.arisglobal.com/agcomp/chip"
          variant="outlined"
          clickable
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
};
