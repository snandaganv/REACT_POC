import React from "react";
import { PropTypes } from "prop-types";
import { Stack, Chip } from "@mui/material";
import { Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";
import Done from "@mui/icons-material/Done";
import Delete from "@mui/icons-material/Delete";

export const BasicChips = ({
  label,
  onClick,
  variant,
  color,
  size,
  direction,
  icon,
  deleteIcon,
  onDelete,
  avatar,
}) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Chip
        label={label}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        icon={icon}
        deleteIcon={deleteIcon}
        onDelete={onDelete}
        avatar={avatar}
      />
    </Stack>
  );
};

BasicChips.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "success", "secondary", "error"]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

export const ClickableChips = ({ onClick }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Stack spacing={2} direction="row">
      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
    </Stack>
  );
};

export const Colors = ({ color }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="primary" color="primary" />
      <Chip label="success" color="success" />
    </Stack>
  );
};

export const Sizes = ({ size }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" variant="outlined" />
    </Stack>
  );
};

export const AvatarChip = ({ avatar }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="https://i.pravatar.cc/150?img=32" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
};

export const IconChips = ({ icon }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<Face />} label="With Icon" />
      <Chip icon={<Face />} label="With Icon" variant="outlined" />
    </Stack>
  );
};

export const DoneDeleteIconChips = ({ deleteIcon }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Done />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<Delete />}
        variant="outlined"
      />
    </Stack>
  );
};

export const ClickableAndDeletableChips = ({ onDelete, onClick }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
};

export const ClickableLinkChips = ({ clickable }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Link"
        component="a"
        href="http://localhost:6006/?path=/docs/input-chip--basic-chip"
        clickable
      />
      <Chip
        label="Clickable Link"
        component="a"
        href="http://localhost:6006/?path=/docs/input-chip--basic-chip"
        variant="outlined"
        clickable
      />
    </Stack>
  );
};
