import React from "react";
import {
  BasicPagination,
  TablePaginationDemo,
  PaginationControlled,
  CustomIconsDemo,
  BasicPaginationDemo,
  PaginationOutlined,
  PaginationRounded,
  PaginationSizeDemo,
  PaginationButtonsDemo,
  PaginationRangesDemo,
} from "../components/pagination-component";
import { Pagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";

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
const Template9 = (args) => <BasicPagination {...args}></BasicPagination>;

export const Default = Template9.bind({});
Default.args = {
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
const Template2 = (args) => <BasicPaginationDemo {...args}></BasicPaginationDemo>;
export const BasicPaginations = Template2.bind({});
const Template3 = (args) => <PaginationOutlined {...args}></PaginationOutlined>;
export const OutlinedPagination = Template3.bind({});
const Template4 = (args) => <PaginationRounded {...args}></PaginationRounded>;
export const RoundedPagination = Template4.bind({});
const Template5 = (args) => <PaginationSizeDemo {...args}></PaginationSizeDemo>;
export const PaginationSize = Template5.bind({});
const Template6 = (args) => <PaginationButtonsDemo {...args}></PaginationButtonsDemo>;
export const PaginationButtons = Template6.bind({});
const Template8 = (args) => <PaginationRangesDemo {...args}></PaginationRangesDemo>;
export const PaginationRanges = Template8.bind({});
const Template7 = (args) => <PaginationControlled {...args}></PaginationControlled>;
export const ControlledPagination = Template7.bind({});
ControlledPagination.args = {
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
const Template71 = (args) => <CustomIconsDemo {...args}></CustomIconsDemo>;
export const CustomIcons = Template71.bind({});
CustomIcons.args = {
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
const Template = (args) => <TablePaginationDemo {...args}></TablePaginationDemo>;
export const TablePagination = Template.bind({});
TablePagination.args = {
  count: 100,
  showFirstButton: false,
  showLastButton: false,
};
