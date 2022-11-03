import * as React from "react";
import { PropTypes } from "prop-types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatColorFill,
  ArrowDropDown,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../.storybook/muiTheme";

export const ToggleButtons = ({
  data,
  size,
  color,
  orientation,
  onClick,
  disabled,
}) => {
  const [alignment, setAligment] = React.useState();

  const handleChange = (event, newAlignment) => {
    setAligment(newAlignment);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <ToggleButtonGroup
        color={color}
        value={alignment}
        exclusive
        onChange={handleChange}
        size={size}
        orientation={orientation}
      >
        {data.map((item, index) => {
          return (
            <ToggleButton
              value={item.toggleButtonValue}
              key={index}
              onClick={onClick}
              disabled={disabled}
            >
              {item.toggleButtonLabel}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};

ToggleButtons.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "success",
    "secondary",
    "error",
    "info",
    "warning",
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  exclusive: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  value: PropTypes.any,
};

export const ToggleButtonSize = ({ size, color, onClick }) => {
  const [alignment, setAlignment] = React.useState("option1");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeft />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenter />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRight />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustify />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style) + :not(style)": { mt: 2 },
          }}
          mb="22px"
        >
          <ToggleButtonGroup size="small" {...control} onClick={onClick}>
            {children}
          </ToggleButtonGroup>
          <ToggleButtonGroup {...control} size="medium" onClick={onClick}>
            {children}
          </ToggleButtonGroup>
          <ToggleButtonGroup size="large" {...control} onClick={onClick}>
            {children}
          </ToggleButtonGroup>
        </Box>
      </ThemeProvider>
    </>
  );
};
ToggleButtonSize.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

export const ToggleButtonColor = ({ color }) => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};

export const ToggleButtonOrientation = ({ onClick, orientation }) => {
  const [alignment, setAlignment] = React.useState("option1");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <ToggleButtonGroup
        orientation={orientation}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="option1" onClick={onClick}>
          Vision
        </ToggleButton>
        <ToggleButton value="option2" onClick={onClick}>
          Mission
        </ToggleButton>
        <ToggleButton value="option2" onClick={onClick}>
          Goals
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};

ToggleButtonOrientation.propTypes = {
  label: PropTypes.string,
  orientation: PropTypes.bool,
};

export const ToggleButtonExclusiveSelections = ({ onChange }) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeft />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenter />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRight />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustify />
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};

export const ToggleButtonMultipleSelections = ({ props }) => {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFill />
          <ArrowDropDown />
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};
