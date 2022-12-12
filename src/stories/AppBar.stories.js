import { AppBar } from "@mui/material";
import {
  AppBarsBasic,
  AppBarsWithPrimarySearch,
  AppBarsBottom,
  AppBarsResponsive,
} from "../components/appbar-component";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

export default {
  title: "Feedback/AppBar",
  component: AppBar,
  argTypes: {
    color: {
      options: ["default", "inherit", "primary", "secondary", "transparent"],
      control: { type: "radio" },
    },
    position: {
      options: ["absolute", "fixed", "relative", "static", "sticky"],
      control: { type: "radio" },
    },
    variant: {
      options: ["dense", "regular"],
      control: { type: "radio" },
    },
  },
};

const AppBarsBasicTemplate = (args) => <AppBarsBasic {...args}></AppBarsBasic>;
export const AppBarBasic = AppBarsBasicTemplate.bind({});
AppBarBasic.args = {
  label: "App Name",
  icon: <MenuIcon />,
  showButton: false,
  buttonLabel: "Login",
  showSearchBar: false,
  color: "primary",
  position: "static",
  variant: "regular",
};

const HowToConsumeAppbarComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI AppBar component ,just pass in the
      props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{AppBarsBasics}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>
      import {"{AppBarsWithPrimarySearch}"} from "@arisglobal/agcp-ui" ;
    </code>
    <br />
    <code>import {"{AppBarsBottom}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{AppBarsResponsive}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <br />
    <code>&lt;AppBarsBasic {"{...props}"}&gt;&lt;/AppBarsBasic&gt;</code>
    <br></br>
    <code>
      &lt;AppBarsWithPrimarySearch {"{...props}"}
      &gt;&lt;/AppBarsWithPrimarySearch&gt;
    </code>
    <br></br>
    <code>
      &lt;AppBarsBottom {"{...props}"}
      &gt;&lt;/AppBarsBottom&gt;
    </code>
    <br></br>
    <code>
      &lt;AppBarsResponsive {"{...props}"}
      &gt;&lt;/AppBarsResponsive&gt;
    </code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeAppbarComponent {...args}></HowToConsumeAppbarComponent>
);
export const HowToConsumeAppbarComponents = TemplateDemo.bind({});

const AppBarsWithPrimarySearchTemplate = (args) => (
  <AppBarsWithPrimarySearch {...args}></AppBarsWithPrimarySearch>
);

export const AppBarWithPrimarySearch = AppBarsWithPrimarySearchTemplate.bind(
  {}
);
AppBarWithPrimarySearch.args = {
  label: "App Name",
  icon: <MenuIcon />,
  iconArray: [
    { icon: <MailIcon />, badgeContent: 3 },
    { icon: <NotificationsIcon />, badgeContent: 10 },
  ],
  accountIcon: <AccountCircle />,
  menuItems: ["Profile", "Myaccount"],
  position: "static",
  color: "primary",
};

const AppBarsBottomTemplate = (args) => (
  <AppBarsBottom {...args}></AppBarsBottom>
);
export const AppBarBottom = AppBarsBottomTemplate.bind({});
AppBarBottom.args = {
  mainLabel: "Inbox",
  subLabel: [
    { id: 1, label: "Today" },
    { id: 3, label: "Yesterday" },
  ],
  messages: [
    {
      id: 1,
      primary: "Brunch this week?",
      secondary:
        "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: "",
    },
    {
      id: 2,
      primary: "Birthday Gift",
      secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
      person: "",
    },
    {
      id: 3,
      primary: "Recipe to try",
      secondary:
        "I am try out this new BBQ recipe, I think this might be amazing",
      person: "",
    },
    {
      id: 4,
      primary: "Yes!",
      secondary: "I have the tickets to the ReactConf for this year.",
      person: "",
    },
    {
      id: 5,
      primary: "Doctor's Appointment",
      secondary:
        "My appointment for the doctor was rescheduled for next Saturday.",
      person: "",
    },
    {
      id: 6,
      primary: "Discussion",
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
      person: "",
    },
    {
      id: 7,
      primary: "Summer BBQ",
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
      person: "",
    },
  ],
  icon: <MenuIcon />,
  iconsArray: [
    { icon: <SearchIcon />, href: "" },
    { icon: <MoreIcon />, href: "" },
  ],
  position: "sticky",
  color: "primary",
};

const AppBarsResponsiveTemplate = (args) => (
  <AppBarsResponsive {...args}></AppBarsResponsive>
);
export const AppBarResponsive = AppBarsResponsiveTemplate.bind({});
AppBarResponsive.args = {
  icon: <MenuIcon />,
  label: "App Name",
  href: "/",
  pages: ["Products", "Pricing", "Blog"],
  settings: ["Profile", "Account", "Dashboard", "Logout"],
  avatarSrc: "",
  position: "static",
  color: "primary",
};
