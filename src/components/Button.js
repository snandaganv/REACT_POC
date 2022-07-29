import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import { FormGroup, Stack } from "@mui/material";
import Send from "@mui/icons-material/Send";
import Delete from "@mui/icons-material/Delete";
import Save from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { CopyBlock, dracula } from "react-code-blocks";

export const Defaults = ({
  label,
  onClick,
  variant,
  color,
  size,
  direction,
}) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Button onClick={onClick} variant={variant} color={color} size={size}>
        {label}
      </Button>
    </Stack>
  );
};

Defaults.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

export const Basics = ({}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
};

export const HandingClick = ({}) => {
  return (
    <Button
      onClick={() => {
        alert("clicked");
      }}
    >
      Click me
    </Button>
  );
};

export const IconLabelButton = ({}) => {
  return (
    <FormGroup>
      <Stack direction="row" spacing={2} mb="12px">
        <Button variant="outlined" startIcon={<Delete />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>
      </Stack>
      <CopyBlock
        language="html"
        text={`<Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>`}
        codeBlock
        theme={dracula}
        showLineNumbers={true}
        wrapLines={true}
      />
    </FormGroup>
  );
};

export const Loadings = ({}) => {
  return (
    <FormGroup>
      <Stack direction="row" spacing={2} mb="12px">
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<Save />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </Stack>
      <CopyBlock
        language="html"
        text={`<LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>`}
        codeBlock
        theme={dracula}
        showLineNumbers={true}
        wrapLines={true}
      />
    </FormGroup>
  );
};
