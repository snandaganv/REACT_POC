import React from "react";
import { PropTypes } from "prop-types";
import {
  Badge,
  Box,
  Switch,
  FormControlLabel,
  ButtonGroup,
} from "@mui/material";
import { Remove, Add, Mail } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const BadgesBasic = ({
  color,
  badgeContent,
  anchorOrigin,
  max,
  variant,
  icon,
  showZero,
  invisible,
  overlap,
}) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Badge
        badgeContent={badgeContent}
        color={color}
        anchorOrigin={anchorOrigin}
        max={max}
        variant={variant}
        showZero={showZero}
        overlap={overlap}
        invisible={invisible}
      >
        {icon}
      </Badge>
    </ThemeProvider>
  );
};
BadgesBasic.propTypes = {
  children: PropTypes.node,
  badgeContent: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  invisible: PropTypes.bool,
  showZero: PropTypes.bool,
  max: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  overlap: PropTypes.oneOf(["circular", "rectangular"]),
  variant: PropTypes.oneOf(["dot", "standard"]),
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
};

export const BadgeDot = ({ variant }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Badge color="primary" variant="dot">
        <Mail />
      </Badge>
    </ThemeProvider>
  );
};

export const BadgeAlignments = ({ anchorOrigin }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Mail />
        </Badge>
        <br />
        <Badge
          badgeContent={10}
          color="primary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Mail />
        </Badge>
      </>
    </ThemeProvider>
  );
};

export const BadgeVisibility = ({ badgeContent }) => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        sx={{
          color: "action.active",
          display: "flex",
          flexDirection: "column",
          "& > *": {
            marginBottom: 2,
          },
          "& .MuiBadge-root": {
            marginRight: 4,
          },
        }}
      >
        <div>
          <Badge color="primary" badgeContent={count}>
            <Mail />
          </Badge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <Remove fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <Add fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Badge color="primary" variant="dot" invisible={invisible}>
            <Mail />
          </Badge>
          <FormControlLabel
            sx={{ color: "text.primary" }}
            control={
              <Switch checked={!invisible} onChange={handleBadgeVisibility} />
            }
            label="Show Badge"
          />
        </div>
      </Box>
    </ThemeProvider>
  );
};
