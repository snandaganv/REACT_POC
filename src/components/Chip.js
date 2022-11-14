import React from "react";
import { PropTypes } from "prop-types";
import { Stack, Chip } from "@mui/material";
import { Avatar ,Icon} from "@mui/material";
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

export const ChipClickables = ( props,onClick ) => {
  const {label,variant,color}=props;
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2} direction="row">
        <Stack direction="row" spacing={1}>
          <Chip label={label} onClick={handleClick} color={color} />
          <Chip
            label={label}
            variant={variant}
            color={color}
            onClick={handleClick}
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export const ChipsColors = (props) => {
  const {colors}=props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        {colors.map((color)=>
        <Chip label={color} color={color} />)}
      </Stack>
    </ThemeProvider>
  );
};

export const ChipSizes = (props) => {
  const {sizes,variant,color}=props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
      {sizes.map((size)=>
      <>
        <Chip label={size} size={size} variant={variant} color={color} />
        </>)}
      </Stack>
    </ThemeProvider>
  );
};

export const ChipAvatars = (props) => {
  const {label,variant,color}=props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip avatar={<Avatar>M</Avatar>} label={label} color={color} />
        <Chip
          avatar={
            <Avatar alt="Natacha" src="https://i.pravatar.cc/150?img=32" />
          }
          label={label}
          variant={variant}
          color={color}
        />
      </Stack>
    </ThemeProvider>
  );
};

export const ChipIcons = (props) => {
  const{chipicons}=props;
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        {chipicons.map((chipicon)=>
        <>
        <Chip
          icon={<Icon>{chipicon.icon}</Icon>}
          label={chipicon.label}
          variant={chipicon.variant}
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<Icon>{chipicon.deleteIcon}</Icon>}
          color={chipicon.color}
        /></>)}
      </Stack>
    </ThemeProvider>
  );
};

export const ChipClickableLinks = (props, clickable ) => {
  const{label,component,href,color,variant}=props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack direction="row" spacing={1}>
        <Chip label={label} component={component} href={href} clickable  color={color}/>
        <Chip label={label} component={component} href={href} variant={variant} clickable color={color}/>
      </Stack>
    </ThemeProvider>
  );
};
