import SearchIconsComponent from "../components/search-icons-component";
export default {
  title: "Data Display/Icons",
  component: SearchIconsComponent,
  argTypes: {
    fontSize: {
      options: ["inherit", "large", "medium", "small"],
      control: { type: "radio" },
    },
    theme: {
      options: ["outlined", "filled", "rounded", "twotone", "sharp"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => {
  return <SearchIconsComponent {...args}></SearchIconsComponent>;
};

export const SearchIcon = Template.bind({});
SearchIcon.storyName = "Search Icon";
SearchIcon.args = {
  theme: "rounded",
  fontSize: "large",
};
