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

export const Default = BasicPagination.bind({});
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

export const BasicPaginations = BasicPaginationDemo.bind({});
export const OutlinedPagination = PaginationOutlined.bind({});
export const RoundedPagination = PaginationRounded.bind({});
export const PaginationSize = PaginationSizeDemo.bind({});
export const PaginationButtons = PaginationButtonsDemo.bind({});
export const PaginationRanges = PaginationRangesDemo.bind({});
export const ControlledPagination = PaginationControlled.bind({});
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
export const CustomIcons = CustomIconsDemo.bind({});
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
export const TablePagination = TablePaginationDemo.bind({});
TablePagination.args = {
  count: 100,
  showFirstButton: false,
  showLastButton: false,
};
