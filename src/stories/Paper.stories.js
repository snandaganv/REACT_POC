import { Elevations, DefaultPapers } from "../components/paper-component";
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

export const DefaultPaper = DefaultPapers.bind({});
DefaultPaper.args = {
  variant: "elevation",
  elevation: 2,
  square: false,
  width: 128,
  height: 128,
};

const HowToConsumePaperComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Paper component ,just pass in the props
      when using the component .
    </code>
    <br />
    <br />
    <code>import {"{DefaultPaper}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;DefaultPapers&gt;&lt;/DefaultPapers&gt;</code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumePaperComponent {...args}></HowToConsumePaperComponent>
);
export const HowToConsumePaperComponents = TemplateDemo.bind({});

export const Elevation = Elevations.bind({});
