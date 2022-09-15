import React from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import { FormGroup, Stack, Box } from "@mui/material";
import Send from "@mui/icons-material/Send";
import Delete from "@mui/icons-material/Delete";
import Save from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { CopyBlock, dracula } from "react-code-blocks";


export const ButtonDefaults = ({
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

ButtonDefaults.propTypes = {
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

export const ButtonBasics = ({}) => {
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

export const ButtonColors = ({}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
};

export const ButtonSizes = ({}) => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>
  );
};

export const ButtonHandingClick = ({}) => {
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

export const ButtonIconLabelButton = ({}) => {
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

export const ButtonLoadings = ({}) => {
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
