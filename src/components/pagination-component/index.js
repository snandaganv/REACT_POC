import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import { PropTypes } from "prop-types";

export const BasicPagination = (props) => {
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
BasicPagination.propTypes = {
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
export const PaginationControlled = (props) => {
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
PaginationControlled.propTypes = {
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

export const CustomIconsDemo = (props) => {
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
CustomIconsDemo.propTypes = {
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

export const TablePaginationDemo = (props) => {
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

TablePaginationDemo.propTypes = {
  count: PropTypes.number,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  onPageChange: PropTypes.func,
  rowsPerPage: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
};

export const BasicPaginationDemo = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>
    </ThemeProvider>
  );
};

export const PaginationOutlined = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </Stack>
    </ThemeProvider>
  );
};

export const PaginationRounded = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </ThemeProvider>
  );
};

export const PaginationSizeDemo = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Stack>
    </ThemeProvider>
  );
};

export const PaginationButtonsDemo = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton hideNextButton />
      </Stack>
    </ThemeProvider>
  );
};

export const PaginationRangesDemo = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Stack spacing={2}>
        <Pagination count={11} defaultPage={6} siblingCount={0} />
        <Pagination count={11} defaultPage={6} />
        <Pagination
          count={11}
          defaultPage={6}
          siblingCount={0}
          boundaryCount={2}
        />
        <Pagination
          count={20}
          defaultPage={8}
          siblingCount={2}
          boundaryCount={2}
        />
      </Stack>
    </ThemeProvider>
  );
};
