import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import { PropTypes } from "prop-types";

export const PaginationDefaults = (props) => {
  const {
    count,
    color,
    shape,
    variant,
    size,
    defaultPage,
    disabled,
    hideNextButton,
    hidePrevButton,
    showFirstButton,
    showLastButton,
    siblingCount,
    boundaryCount,
  } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          color={color}
          shape={shape}
          variant={variant}
          size={size}
          defaultPage={defaultPage}
          disabled={disabled}
          hideNextButton={hideNextButton}
          hidePrevButton={hidePrevButton}
          showFirstButton={showFirstButton}
          showLastButton={showLastButton}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
        />
      </Stack>
    </ThemeProvider>
  );
};
PaginationDefaults.propTypes = {
  count: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  disabled: PropTypes.bool,
  defaultPage: PropTypes.number,
  siblingCount: PropTypes.number,
  boundaryCount: PropTypes.number,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
};

export const PaginationsControlled = (props) => {
  const {
    count,
    color,
    shape,
    variant,
    size,
    defaultPage,
    disabled,
    hideNextButton,
    hidePrevButton,
    showFirstButton,
    showLastButton,
    siblingCount,
    boundaryCount,
  } = props;
  const [page, setPage] = React.useState(defaultPage);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={count}
          color={color}
          shape={shape}
          variant={variant}
          size={size}
          defaultPage={defaultPage}
          disabled={disabled}
          hideNextButton={hideNextButton}
          hidePrevButton={hidePrevButton}
          showFirstButton={showFirstButton}
          showLastButton={showLastButton}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </ThemeProvider>
  );
};
PaginationsControlled.propTypes = {
  count: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  disabled: PropTypes.bool,
  defaultPage: PropTypes.number,
  siblingCount: PropTypes.number,
  boundaryCount: PropTypes.number,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  onChange: PropTypes.func,
};

export const PaginationsCustomsIcons = (props) => {
  const {
    count,
    color,
    shape,
    variant,
    size,
    defaultPage,
    disabled,
    hideNextButton,
    hidePrevButton,
    showFirstButton,
    showLastButton,
    siblingCount,
    boundaryCount,
    previousIcon,
    nextIcon,
  } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          color={color}
          shape={shape}
          variant={variant}
          size={size}
          defaultPage={defaultPage}
          disabled={disabled}
          hideNextButton={hideNextButton}
          hidePrevButton={hidePrevButton}
          showFirstButton={showFirstButton}
          showLastButton={showLastButton}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: previousIcon, next: nextIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </ThemeProvider>
  );
};
PaginationsCustomsIcons.propTypes = {
  count: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  disabled: PropTypes.bool,
  defaultPage: PropTypes.number,
  siblingCount: PropTypes.number,
  boundaryCount: PropTypes.number,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  renderItem: PropTypes.func,
};

export const PaginationsTable = (props) => {
  const { count, showFirstButton, showLastButton } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={count}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

PaginationsTable.propTypes = {
  count: PropTypes.number,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  onPageChange: PropTypes.func,
  rowsPerPage: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
};

export const PaginationsBasic = (props) => {
  const { data, count, variant, shape, size } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        {data.map((item) => (
          <Pagination
            count={count}
            color={item.color}
            disabled={item.disabled}
            variant={variant}
            shape={shape}
            size={size}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};
PaginationsBasic.propTypes = {
  count: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  disabled: PropTypes.bool,
  data: PropTypes.array,
};

export const PaginationsOutlined = (props) => {
  const { data, count, shape, size } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        {data.map((item) => (
          <Pagination
            count={count}
            color={item.color}
            disabled={item.disabled}
            variant={item.variant}
            shape={shape}
            size={size}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};
PaginationsOutlined.propTypes = {
  count: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  disabled: PropTypes.bool,
  data: PropTypes.array,
};
export const PaginationsRounded = (props) => {
  const { data, count, size } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        {data.map((item) => (
          <Pagination
            count={count}
            color={item.color}
            disabled={item.disabled}
            variant={item.variant}
            shape={item.shape}
            size={size}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};

PaginationsRounded.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export const PaginationSizes = (props) => {
  const { data, count } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        {data.map((item) => (
          <Pagination
            count={count}
            color={item.color}
            disabled={item.disabled}
            variant={item.variant}
            shape={item.shape}
            size={item.size}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};
PaginationSizes.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
};

export const PaginationsButtons = (props) => {
  const { data, count } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        {data.map((item) => (
          <Pagination
            count={count}
            color={item.color}
            disabled={item.disabled}
            variant={item.variant}
            shape={item.shape}
            size={item.size}
            showFirstButton={item.showFirstButton}
            showLastButton={item.showLastButton}
            hidePrevButton={item.hidePrevButton}
            hideNextButton={item.hideNextButton}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};
PaginationsButtons.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
};

export const PaginationsRanges = (props) => {
  const { data, count } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        {data.map((item) => (
          <Pagination
            count={count}
            color={item.color}
            disabled={item.disabled}
            variant={item.variant}
            shape={item.shape}
            size={item.size}
            defaultPage={item.defaultPage}
            siblingCount={item.siblingCount}
            boundaryCount={item.boundaryCount}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
};
PaginationsRanges.propTypes = {
  count: PropTypes.number,
  data: PropTypes.array,
};
