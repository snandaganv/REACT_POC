import { Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { Alarm } from "@mui/icons-material";
import {
  ButtonDefaults,
  ButtonBasics,
  ButtonHandingClick,
  ButtonColors,
  ButtonSizes,
  ButtonIcon,
  ButtonIconExamples,
  ButtonIconLabelButton,
  ButtonLoadings,
} from "../components/Button";

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
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
    onClick: { action: "Clicked" },
  },
};

export const ButtonDefault = ButtonDefaults.bind({});
ButtonDefault.args = {
  children: "Button",
  variant: "contained",
  color: "primary",
  size: "medium",
  direction: "row",
  disabled: false,
  startIcon: <Delete />,
};
ButtonDefault.parameters = {
  docs: {
    source: {
      code: `<Stack direction={direction} spacing={2}>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        disabled=false
        startIcon=<Delete />
      >
        Button
      </Button>
    </Stack>`,
      language: "html",
    },
  },
};

export const ButtonBasic = ButtonBasics.bind({});
ButtonBasic.parameters = {
  docs: {
    source: {
      code: ` <Stack spacing={2} direction="row">
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="contained" color="primary" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </Stack>`,
      language: "html",
    },
  },
};

export const ButtonHandingClicks = ButtonHandingClick.bind({});
ButtonHandingClicks.parameters = {
  docs: {
    source: {
      code: `<Button
      color="primary"
      onClick={() => {
        alert("clicked");
      }}
    >
      Click me
    </Button>`,
      language: "html",
    },
  },
};

export const ButtonColor = ButtonColors.bind({});
ButtonColor.parameters = {
  docs: {
    source: {
      code: `<Stack direction="row" spacing={2}>
      <Button color="primary" variant="contained">
        primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" color="info">
        Info
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
    </Stack>`,
      language: "html",
    },
  },
};

export const ButtonSize = ButtonSizes.bind({});
ButtonSize.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ "& button": { m: 1 } }}>
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
    </Box>`,
      language: "html",
    },
  },
};

export const ButtonIcons = ButtonIcon.bind({});
ButtonIcons.args = {
  color: "primary",
  icon: <Alarm />,
};
ButtonIcons.parameters = {
  docs: {
    source: {
      code: `<Stack direction="row" spacing={1}>
      <IconButton
        aria-label=""
        size={size}
        color="primary"
      >
      <Alarm />
      </IconButton>
    </Stack>`,
      language: "html",
    },
  },
};

export const ButtonIconBasic = ButtonIconExamples.bind({});
ButtonIconBasic.parameters = {
  docs: {
    source: {
      code: `<Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <Delete />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <Delete />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <Alarm />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCart />
      </IconButton>
    </Stack>`,
      language: "html",
    },
  },
};

export const ButtonIconLabelButtons = ButtonIconLabelButton.bind({});
ButtonIconLabelButtons.parameters = {
  docs: {
    source: {
      code: ` <Stack direction="row" spacing={2} mb="12px">
      <Button variant="outlined" color="primary" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" color="primary" endIcon={<Send />}>
        Send
      </Button>
    </Stack>`,
      language: "html",
    },
  },
};

export const ButtonLoading = ButtonLoadings.bind({});
ButtonLoading.args = {
  children: "Submit",
  variant: "outlined",
  loading: true,
};
ButtonLoading.parameters = {
  docs: {
    source: {
      code: `      <FormGroup>
      <Stack direction="row" spacing={2} mb="12px">
        <LoadingButton
          loading="true"
          variant="outlined"
        >
          Submit
        </LoadingButton>
      </Stack>
    </FormGroup>`,
      language: "html",
    },
  },
};
