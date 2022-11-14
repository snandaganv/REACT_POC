import { Menu } from "@mui/material";
import { ContentCopy, ContentCut, ContentPaste, Cloud, Check, Send, PriorityHigh, Drafts } from "@mui/icons-material";
import {
    MenusBasic,
    MenusIcon,
    MenusDense,
    MenusSimpleList,
    MenusAccount,
    MenusTypography,
    MenusLong,
    MenusPositioned,
    Divider,
    MenusContext,
} from "../components/menu-component";

export default {
    title: 'Navigation/Menu',
    component: Menu,
};

export const MenuBasic = MenusBasic.bind({});
MenuBasic.args = {
    label: "Dashboard",
    menulist: [{ value: 1, label: 'Profile' }, { value: 2, label: 'My account' }, { value: 3, label: 'Logout' }],
};

export const MenuDense = MenusDense.bind({});
MenuDense.args = {
    autoFocus: false,
    dense: true,
    disableGutters: false,
    divider: false,
    denseicon: [
        { text: "Single" },
        { text: 1.15 },
        { text: "Double" },
        { icon: <Check fontSize="small" />, text: "Custom: 1.2" },
    ],
    densetext: [
        { textspacaf: "Add space after paragraph" },
    ],
    densetext1: [
        { textspacbf: "Add space before paragraph" },
    ]
};

export const MenuIcons = MenusIcon.bind({});
MenuIcons.args = {
    menuicons: [
        { icon: <ContentCut fontSize="small" />, typography: "⌘X", label: "Cut" },
        { icon: <ContentCopy fontSize="small" />, typography: "⌘C", label: "Copy" },
        { icon: <ContentPaste fontSize="small" />, typography: "⌘V", label: "Paste" },
    ],
    menuclip: [{ icon: <Cloud fontSize="small" />, label: "Web Clipboard" }]
};

export const MenuSimpleList = MenusSimpleList.bind({});
MenuSimpleList.args = {
    simplemenu: [
        { label: "Show some love to MUI" },
        { label: "Show all notification content" },
        { label: "Hide sensitive notification content" },
        { label: "Hide all notification content" },
    ]
};

export const MenuAccount = MenusAccount.bind({});
MenuAccount.args = {
    typomenus: [
        { icon: <Send fontSize="small" />, label: "A short message" },
        { icon: <PriorityHigh fontSize="small" />, label: "A very long text that overflows" },
        { icon: <Drafts fontSize="small" />, textlbl: " A very long text that overflows" },
    ]
};


export const MenuLong = MenusLong.bind({});
MenuLong.args = {
    longtext: [
        { value: 1, option: 'options 1' }, { value: 2, option: 'options 2' }, { value: 3, label: 'options 3' }, { value: 4, label: 'options 4' }, { value: 5, label: 'options 5' }, { value: 6, label: 'options 6' }, { value: 7, label: 'options 7' }, { value: 8, label: 'options 8' }, { value: 9, label: 'options 9' }, { value: 10, label: 'options 10' }, { value: 11, label: 'options 11' }, { value: 12, label: 'options 12' }, { value: 13, label: 'options 13' }, { value: 14, label: 'options 14' }, { value: 15, label: 'options 15' }
    ]
};

export const MenuTypography = MenusTypography.bind({});
MenuTypography.args = {
    typomenus: [
        { icon: <Send fontSize="small" />, label: "A short message" },
        { icon: <PriorityHigh fontSize="small" />, label: "A very long text that overflows" },
        { icon: <Drafts fontSize="small" />, textlbl: " A very long text that overflows" },
    ]
};

export const MenuPositioned = MenusPositioned.bind({});
MenuPositioned.args = {
    label: "Dashboard",
    menulist: [{ value: 1, label: 'Profile' }, { value: 2, label: 'My account' }, { value: 3, label: 'Logout' }],
};

export const MenuContext = MenusContext.bind({});
MenuContext.args = {
    typo: [
        { label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus." },
    ],
    contxtmenu: [{ value: 1, label: 'Copy' }, { value: 2, label: 'Print' }, { value: 3, label: 'Highlight' }, { value: 4, label: 'Email' }]
};


