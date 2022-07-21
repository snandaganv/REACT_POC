import { Button, Stack } from "@mui/material";
import Send from "@mui/icons-material/Send";
import Delete from "@mui/icons-material/Delete";
import Save from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

export default {
  title: "Input/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

const Basics = (args) => (
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

const HandingClick = (args) => (
  <Button
    onClick={() => {
      alert("clicked");
    }}
  >
    Click me
  </Button>
);

const IconLabelButton = (args) => (
  <Stack direction="row" spacing={2}>
    <Button variant="outlined" startIcon={<Delete />}>
      Delete
    </Button>
    <Button variant="contained" endIcon={<Send />}>
      Send
    </Button>
  </Stack>
);

const Loadings = (args) => (
  <Stack direction="row" spacing={2}>
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
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
};

export const BasicButton = Basics.bind({});

export const HandingClicks = HandingClick.bind({});

export const IconLabelButtons = IconLabelButton.bind({});

export const LoadingButtons = Loadings.bind({});
