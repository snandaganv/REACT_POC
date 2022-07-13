import { Button } from "@mui/material";
import Basic from "../components/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import { Defaults } from "../components/Button";

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
    onClick: { action: "clicked" },
  },
  direction: {
    options: ["row", "row-reverse", "column", "column-reverse"],
    control: { type: "radio" },
  },
  parameters: {
    backgrounds: {
      default: "Light Theme",
      values: [{ name: "Dark Theme", value: "#656B73" }],
    },
  },
};

const Template = (args) => <Defaults {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

export const BasicButtons = ({ direction, onClick }) => {
  return (
    <Stack spacing={2} direction={direction}>
      <Button variant="text" onClick={onClick}>
        Text
      </Button>
      <Button variant="contained" onClick={onClick}>
        Contained
      </Button>
      <Button variant="outlined" onClick={onClick}>
        Outlined
      </Button>
      <Button disabled variant="contained">
        Disabled
      </Button>
    </Stack>
  );
};
BasicButtons.args = {
  direction: "row",
};

export const ButtonSizes = ({ direction, onClick }) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Box sx={{ "& button": { m: 1 } }}>
        {/* <div> */}
        <Button size="small" onClick={onClick}>
          Small
        </Button>
        <Button size="medium" onClick={onClick}>
          Medium
        </Button>
        <Button size="large" onClick={onClick}>
          Large
        </Button>
        {/* </div>
        <div> */}
        <Button variant="outlined" size="small" onClick={onClick}>
          Small
        </Button>
        <Button variant="outlined" size="medium" onClick={onClick}>
          Medium
        </Button>
        <Button variant="outlined" size="large" onClick={onClick}>
          Large
        </Button>
        {/* </div>
        <div> */}
        <Button variant="contained" size="small" onClick={onClick}>
          Small
        </Button>
        <Button variant="contained" size="medium" onClick={onClick}>
          Medium
        </Button>
        <Button variant="contained" size="large" onClick={onClick}>
          Large
        </Button>
        {/* </div> */}
      </Box>
    </Stack>
  );
};

ButtonSizes.args = {
  direction: "column",
};

export const ButtonIconLabel = ({ direction, onClick }) => {
  return (
    <Stack direction={direction} spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={onClick}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} onClick={onClick}>
        Send
      </Button>
    </Stack>
  );
};

ButtonIconLabel.args = {
  direction: "row",
};

export const Try = ({ direction, onClick }) => {
  return (
    // <Stack direction={direction} spacing={2} sx={{ "& button": { m: 1 } }}>
    // <Box sx={{ "& button": { m: 1 } }}>
    //   <Stack direction={direction} spacing={1}>
    //     <Button variant="contained" size="small" onClick={onClick}>
    //       Small
    //     </Button>
    //     <Button variant="contained" size="medium" onClick={onClick}>
    //       Medium
    //     </Button>
    //     <Button variant="contained" size="large" onClick={onClick}>
    //       Large
    //     </Button>
    //   </Stack>
    //   <Button variant="contained" size="small" onClick={onClick}>
    //     Small
    //   </Button>
    //   <Button variant="contained" size="medium" onClick={onClick}>
    //     Medium
    //   </Button>
    //   <Button variant="contained" size="large" onClick={onClick}>
    //     Large
    //   </Button>
    //   <Button colorScheme="blue" variant="contained" size="small">
    //     Button
    //   </Button>
    //   <Button colorScheme="blue" variant="contained" size="medium">
    //     Button
    //   </Button>
    //   <Button colorScheme="blue" variant="contained" size="large">
    //     Button
    //   </Button>
    // </Box>
    <Stack direction={direction} spacing={2}>
      <Button variant="outlined" size="small" onClick={onClick}>
        Delete
      </Button>
      <Button variant="contained" onClick={onClick}>
        Send
      </Button>
    </Stack>
  );
};

Try.args = {
  direction: "row",
};
