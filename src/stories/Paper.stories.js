import {
  ElevationPage,
  SimplePaper,
  BasicPaper,
} from "../components/paper-component";
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

export const DefaultPaper = SimplePaper.bind({});
DefaultPaper.args = {
  variant: "elevation",
  elevation: 2,
  square: false,
  width: 128,
  height: 128,
};

export const Elevations = ElevationPage.bind({});
