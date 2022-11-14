import {
  AccordionBasic,
  AccordionControlled,
  AccordionCustomization,
} from "../components/Accordion";

export default {
  title: "Surfaces/Accordion",
};

const Template = (args)=><AccordionBasic {...args}></AccordionBasic>
export const AccordionBasics = Template.bind({});
AccordionBasics.args = {
  data: [
    {
      heading: "Accordion 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Accordion 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      heading: "Accordion 3",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

const AccordionControlledTemplate = (args)=><AccordionControlled {...args}></AccordionControlled>
export const AccordionsControlled = AccordionControlledTemplate.bind({});
AccordionsControlled.args = {
  data: [
    {
      heading: "General settings",
      secondaryHeading: "I am an accordion",
      content:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      heading: "User",
      secondaryHeading: "You are currently not an owener",
      content:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
    },
    {
      heading: "Advanced settings",
      secondaryHeading:
        "Filtering has been entirely disabled for whole web server",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

const AccordionCustomizationTemplate = (args)=><AccordionCustomization {...args}></AccordionCustomization>
export const AccordionCustomizations = AccordionCustomizationTemplate.bind({});
AccordionCustomizations.args = {
  data: [
    {
      heading: "Collapsible Group Item #1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      heading: "Collapsible Group Item #2",
      content:
        "Consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      heading: "Collapsible Group Item #3",
      content:
        "Uspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
  ],
};
