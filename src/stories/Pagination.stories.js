import React from "react";
import {
  PaginationDefaults,
  PaginationsTable,
  PaginationsControlled,
  PaginationsCustomsIcons,
  PaginationsBasic,
  PaginationsOutlined,
  PaginationsRounded,
  PaginationSizes,
  PaginationsButtons,
  PaginationsRanges,
} from "../components/pagination-component";
import { Pagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
  argTypes: {
    color: {
      options: ["standard", "primary", "secondary"],
      control: { type: "radio" },
    },
    shape: {
      options: ["circular", "rounded"],
      control: { type: "radio" },
    },
    variant: {
      options: ["outlined", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PaginationDefaults {...args}></PaginationDefaults>;

export const PaginationDefault = Template.bind({});
PaginationDefault.args = {
  count: 10,
  shape: "circular",
  color: "standard",
  variant: "text",
  size: "medium",
  defaultPage: 1,
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  siblingCount: 1,
  boundaryCount: 1,
};

const PaginationBasicTemplate = (args) => (
  <PaginationsBasic {...args}></PaginationsBasic>
);

export const PaginationBasic = PaginationBasicTemplate.bind({});
PaginationBasic.args = {
  data: [
    { color: "standard" },
    { color: "primary" },
    { color: "secondary" },
    { color: "standard", disabled: true },
  ],
  count: 10,
  shape: "circular",
  variant: "text",
  size: "medium",
};

const PaginationOutlinedTemplate = (args) => (
  <PaginationsOutlined {...args}></PaginationsOutlined>
);
export const PaginationOutlined = PaginationOutlinedTemplate.bind({});
PaginationOutlined.args = {
  data: [
    { color: "standard", variant: "outlined" },
    { color: "primary", variant: "outlined" },
    { color: "secondary", variant: "outlined" },
    { color: "standard", variant: "outlined", disabled: true },
  ],
  count: 10,
  shape: "circular",
  size: "medium",
};

const PaginationsRoundedTemplate = (args) => (
  <PaginationsRounded {...args}></PaginationsRounded>
);

export const PaginationRounded = PaginationsRoundedTemplate.bind({});
PaginationRounded.args = {
  data: [
    { color: "standard", variant: "text", shape: "rounded" },
    { color: "standard", variant: "outlined", shape: "rounded" },
  ],
  count: 10,
  size: "medium",
};

const PaginationSizesTemplate = (args) => (
  <PaginationSizes {...args}></PaginationSizes>
);

export const PaginationSize = PaginationSizesTemplate.bind({});
PaginationSize.args = {
  data: [
    { color: "standard", variant: "text", shape: "circular", size: "small" },
    { color: "standard", variant: "text", shape: "circular", size: "medium" },
    { color: "standard", variant: "text", shape: "circular", size: "large" },
  ],
  count: 10,
};

const PaginationsButtonsTemplate = (args) => (
  <PaginationsButtons {...args}></PaginationsButtons>
);

export const PaginationButtons = PaginationsButtonsTemplate.bind({});
PaginationButtons.args = {
  data: [
    {
      color: "standard",
      variant: "text",
      shape: "circular",
      size: "medium",
      showFirstButton: true,
      showLastButton: true,
      hidePrevButton: false,
      hideNextButton: false,
    },
    {
      color: "standard",
      variant: "text",
      shape: "circular",
      size: "medium",
      showFirstButton: false,
      showLastButton: false,
      hidePrevButton: true,
      hideNextButton: true,
    },
  ],
  count: 10,
};

const PaginationsRangesTemplate = (args) => (
  <PaginationsRanges {...args}></PaginationsRanges>
);

export const PaginationRanges = PaginationsRangesTemplate.bind({});
PaginationRanges.args = {
  data: [
    {
      color: "standard",
      variant: "text",
      shape: "circular",
      size: "medium",
      defaultPage: 6,
      siblingCount: 0,
      boundaryCount: 1,
    },
    {
      color: "standard",
      variant: "text",
      shape: "circular",
      size: "medium",
      defaultPage: 6,
      siblingCount: 1,
      boundaryCount: 1,
    },
    {
      color: "standard",
      variant: "text",
      shape: "circular",
      size: "medium",
      defaultPage: 6,
      siblingCount: 0,
      boundaryCount: 2,
    },
    {
      color: "standard",
      variant: "text",
      shape: "circular",
      size: "medium",
      defaultPage: 8,
      siblingCount: 2,
      boundaryCount: 2,
    },
  ],
  count: 20,
};

const PaginationsControlledTemplate = (args) => (
  <PaginationsControlled {...args}></PaginationsControlled>
);

export const PaginationControlled = PaginationsControlledTemplate.bind({});
PaginationControlled.args = {
  count: 10,
  shape: "circular",
  color: "standard",
  variant: "text",
  size: "medium",
  defaultPage: 1,
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  siblingCount: 1,
  boundaryCount: 1,
};

const PaginationsCustomsIconsTemplate = (args) => (
  <PaginationsCustomsIcons {...args}></PaginationsCustomsIcons>
);

export const PaginationCustomsIcons = PaginationsCustomsIconsTemplate.bind({});
PaginationCustomsIcons.args = {
  previousIcon: ArrowBackIcon,
  nextIcon: ArrowForwardIcon,
  count: 10,
  shape: "circular",
  color: "standard",
  variant: "text",
  size: "medium",
  defaultPage: 1,
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  siblingCount: 1,
  boundaryCount: 1,
};

const PaginationsTableTemplate = (args) => (
  <PaginationsTable {...args}></PaginationsTable>
);

export const PaginationTable = PaginationsTableTemplate.bind({});
PaginationTable.args = {
  count: 100,
  showFirstButton: false,
  showLastButton: false,
};
