import { SpeedDial } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import {
    SpeedDialsBasic,
    SpeedDialsPlayground,
    SpeedDialsControlledOpen,
    SpeedDialsCustomIcon,
    SpeedDialsTooltipOpen
} from "../components/speeddial-component";

export default {
    title: 'Navigation/SpeedDial',
    component: SpeedDial,
    argTypes: {
        direction: {
            options: ["up", "down", "left", "right"],
            control: { type: "radio" },
        },
        tooltipPlacement: {
            options: ["left", "left-start", "left-end", "bottom-end", "bottom-start", "bottom", "right-end", "right-start", "right", "top-end", "top-start", "top"],
            control: { type: "radio" },
        },
    },
};

const SpeedDialsBasicTemplate = (args) => <SpeedDialsBasic {...args}></SpeedDialsBasic>
export const SpeedDialBasic = SpeedDialsBasicTemplate.bind({});
SpeedDialBasic.args = {
    actions: [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },],

    direction: "up",
    hidden: false,
    tooltipOpen: false,
    ariaLabel: "SpeedDial basic example",
    tooltipPlacement: "left",
};
const SpeedDialsPlaygroundTemplate = (args) => <SpeedDialsPlayground {...args}></SpeedDialsPlayground>
export const SpeedDialPlayground = SpeedDialsPlaygroundTemplate.bind({});
SpeedDialPlayground.args = {
    actions: [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },],
};

const SpeedDialsControlledOpenTemplate = (args) => <SpeedDialsControlledOpen {...args}></SpeedDialsControlledOpen>
export const SpeedDialControlledOpen = SpeedDialsControlledOpenTemplate.bind({});
SpeedDialControlledOpen.args = {
    actions: [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },],
};

const SpeedDialsCustomIconTemplate = (args) => <SpeedDialsCustomIcon {...args}></SpeedDialsCustomIcon>
export const SpeedDialCustomIcon = SpeedDialsCustomIconTemplate.bind({});
SpeedDialCustomIcon.args = {
    actions: [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },],
};
const SpeedDialsTooltipOpenTemplate = (args) => <SpeedDialsTooltipOpen {...args}></SpeedDialsTooltipOpen>
export const SpeedDialTooltipOpen = SpeedDialsTooltipOpenTemplate.bind({});
SpeedDialTooltipOpen.args = {
    actions: [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },],
};