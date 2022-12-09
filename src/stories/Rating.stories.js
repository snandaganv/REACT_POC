import { Stack } from "@mui/material";
import RatingComponent from "../components/rating-component";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default {
  title: "Feedback/Rating",
  component: RatingComponent,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <RatingComponent {...args}></RatingComponent>;

export const Default = Template.bind({});

Default.args = {
  hoverFeedback: false,
  precision: 0.5,
  defaultValue: 2,
  size: "large",
  disabled: false,
  name: "no-value",
  readOnly: false,
  max: 5,
  labels: {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  },
};

const HowToConsumeRatingComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Rating component ,just pass in the
      props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{RatingComponent}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>&lt;RatingComponent {"{...props}"}&gt;&lt;/RatingComponent&gt;</code>
  </div>
);
const TemplateDiscription = (args) => (
  <HowToConsumeRatingComponent {...args}></HowToConsumeRatingComponent>
);
export const HowToConsumeRatingComponents = TemplateDiscription.bind({});

export const HoverFeedback = Template.bind({});

HoverFeedback.args = {
  hoverFeedback: true,
  precision: 0.5,
  defaultValue: 2,
  size: "large",
  disabled: false,
  name: "no-value",
  readOnly: false,
};

export const Readonly = Template.bind({});

Readonly.args = {
  hoverFeedback: true,
  precision: 0.5,
  defaultValue: 2,
  size: "large",
  disabled: false,
  name: "no-value",
  readOnly: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  hoverFeedback: false,
  precision: 0.5,
  defaultValue: 2,
  size: "large",
  disabled: true,
  name: "no-value",
  readOnly: true,
};

export const NoRating = Template.bind({});

NoRating.args = {
  hoverFeedback: false,
  precision: 0.5,
  defaultValue: 0,
  size: "large",
  disabled: true,
  name: "no-value",
  readOnly: true,
};

const SizesTemplate = () => (
  <>
    <Stack direction="column" spacing={1}>
      <RatingComponent
        size="small"
        precision="0.5"
        hoverFeedback="true"
        defaultValue="2"
        name="rating-small"
      ></RatingComponent>
      <RatingComponent
        size="medium"
        precision="0.5"
        hoverFeedback="true"
        defaultValue="3"
        name="rating-small"
      ></RatingComponent>
      <RatingComponent
        size="large"
        precision="0.5"
        hoverFeedback="true"
        defaultValue="4"
        name="rating-small"
      ></RatingComponent>
    </Stack>
  </>
);
export const sizes = SizesTemplate.bind({});

export const CustomRating = Template.bind({});

CustomRating.args = {
  hoverFeedback: true,
  precision: 0.5,
  defaultValue: 2,
  size: "large",
  disabled: false,
  name: "no-value",
  readOnly: false,
  max: 5,
  labels: {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  },
  icon: <FavoriteIcon fontSize="inherit" />,
  emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
  color: "primary",
};
