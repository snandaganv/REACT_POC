import { Avatar, Menu } from "@mui/material";
import { Check } from "@mui/icons-material";
import {
  MenusBasic,
  MenusDense,
  MenusIcon,
  MenusSimpleList,
  MenusAccount,
  MenusLong,
  MenusTypography,
  MenusPositioned,
  MenusContext,
} from "../components/menu-component";

export default {
  title: "Navigation/Menu",
  component: Menu,
};

const MenusBasicTemplate = (args) => <MenusBasic {...args}></MenusBasic>;
export const MenuBasic = MenusBasicTemplate.bind({});
MenuBasic.args = {
  label: "Dashboard",
  menulist: [
    { value: 1, label: "Profile" },
    { value: 2, label: "My account" },
    { value: 3, label: "Logout" },
  ],
};

const MenusDenseTemplate = (args) => <MenusDense {...args}></MenusDense>;
export const MenuDense = MenusDenseTemplate.bind({});
MenuDense.args = {
  autoFocus: false,
  dense: true,
  disableGutters: false,
  divider: false,
  denseicon: [
    { text: "Single" },
    { text: 1.15 },
    { text: "Double" },
    { icon: "check", text: "Custom: 1.2" },
  ],
  densetext: [{ textspacaf: "Add space after paragraph" }],
  densetext1: [{ textspacbf: "Add space before paragraph" }],
};

const MenusIconTemplate = (args) => <MenusIcon {...args}></MenusIcon>;
export const MenuIcons = MenusIconTemplate.bind({});
MenuIcons.args = {
  menuiconData: [
    { icon: "content_cut", typography: "⌘X", label: "Cut" },
    { icon: "content_copy", typography: "⌘C", label: "Copy" },
    {
      icon: "content_paste",
      typography: "⌘V",
      label: "Paste",
    },
  ],
  menuclip: [{ icon: "cloud", label: "Web Clipboard" }],
};

const MenusSimpleListTemplate = (args) => (
  <MenusSimpleList {...args}></MenusSimpleList>
);
export const MenuSimpleList = MenusSimpleListTemplate.bind({});
MenuSimpleList.args = {
  options: [
    "Show some love to MUI",
    "Show all notification content",
    "Hide sensitive notification content",
    "Hide all notification content",
  ],
};

const MenusAccountTemplate = (args) => <MenusAccount {...args}></MenusAccount>;
export const MenuAccount = MenusAccountTemplate.bind({});
MenuAccount.args = {
  menuLabel: ["Contact", "Profile"],
  menuData: [
    { icon: <Avatar />, label: "Profile" },
    {
      icon: <Avatar />,
      label: "My Account",
    },
  ],
  menuAccountData: [
    {
      icon: "person_add",
      label: " Add another account",
    },
    {
      icon: "settings",
      label: " Settings",
    },
    {
      icon: "logout",
      label: " Logout",
    },
  ],
};

const MenusLongTemplate = (args) => <MenusLong {...args}></MenusLong>;
export const MenuLong = MenusLongTemplate.bind({});
MenuLong.args = {
  option: [
    "None",
    "Atria",
    "Callisto",
    "Dione",
    "Ganymede",
    "Hangouts Call",
    "Luna",
    "Oberon",
    "Phobos",
    "Pyxis",
    "Sedna",
    "Titania",
    "Triton",
    "Umbriel",
  ],
};

const MenusTypographyTemplate = (args) => (
  <MenusTypography {...args}></MenusTypography>
);
export const MenuTypography = MenusTypographyTemplate.bind({});
MenuTypography.args = {
  typomenus: [
    { icon: "send", label: "A short message" },
    {
      icon: "priority_high",
      label: "A very long text that overflows",
    },
    {
      icon: "drafts",
      textlbl: " A very long text that overflows",
    },
  ],
};

const MenusPositionedTemplate = (args) => (
  <MenusPositioned {...args}></MenusPositioned>
);
export const MenuPositioned = MenusPositionedTemplate.bind({});
MenuPositioned.args = {
  label: "Dashboard",
  menulist: [
    { value: 1, label: "Profile" },
    { value: 2, label: "My account" },
    { value: 3, label: "Logout" },
  ],
};

const MenusContextTemplate = (args) => <MenusContext {...args}></MenusContext>;
export const MenuContext = MenusContextTemplate.bind({});
MenuContext.args = {
  typo: [
    {
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.",
    },
  ],
  contxtmenu: [
    { value: 1, label: "Copy" },
    { value: 2, label: "Print" },
    { value: 3, label: "Highlight" },
    { value: 4, label: "Email" },
  ],
};
