import { Elevations, PapersBasic } from "../components/paper-component";
import { Paper } from "@mui/material";

export default {
  title: "Surfaces/Paper",
  component: Paper,
  argTypes: {
    variant: {
      options: ["outlined", "elevation"],
      control: { type: "radio" },
    },
  },
};

const PapersBasicTemplate = (args) => <PapersBasic {...args}></PapersBasic>
export const PaperBasic = PapersBasicTemplate.bind({});
PaperBasic.args = {
  variant: "elevation",
  elevation: 2,
  square: false,
  styles: {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: 128,
      height: 128,
    },
  }
};

const ElevationsTemplate = (args) => <Elevations {...args}></Elevations>
export const Elevation = ElevationsTemplate.bind({});
