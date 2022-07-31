import * as React from "react";
import { PropTypes } from "prop-types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
//import { FormatBold } from "@mui/icons-material";
//import { FormatItalic } from "@mui/icons-material";
//import { FormatUnderlined } from "@mui/icons-material";
//import { FormatColorFill } from "@mui/icons-material";
//import { ArrowDropDown } from "@mui/icons-material";
import { Box } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";
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
//import styled from "@emotion/styled";

export const ToggleButtons = ({
  label,
  disabled,
  onClick,
  size,
  orientation,
  color,
}) => {
  const [alignment, setAlignment] = React.useState("option1");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color={color}
      value={alignment}
      exclusive
      onChange={handleChange}
      disabled="disabled"
      size={size}
      orientation={orientation}
    >
      <ToggleButton value="option1" onClick={onClick} disabled={disabled}>
        {label}
      </ToggleButton>
      <ToggleButton value="option2" onClick={onClick} disabled={disabled}>
        {label}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleButtons.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

// export const ToggleButtonsDisabled = ({ label, disabled, onClick }) => {
//   const [alignment, setAlignment] = React.useState("option1");
//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
//   return (
//     <ToggleButtonGroup
//       color="primary"
//       value={alignment}
//       exclusive
//       onChange={handleChange}
//       disabled={disabled}
//     >
//       <ToggleButton value="option1" onClick={onClick}>
//         {label}
//       </ToggleButton>
//       <ToggleButton value="option2" onClick={onClick}>
//         {label}
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// };

// ToggleButtons.propTypes = {
//   label: PropTypes.string,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
// };

export const Size = ({ size, color, onClick }) => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style) + :not(style)": { mt: 2 },
        }}
        mb="22px"
      >
        <ToggleButtonGroup size={size} {...control} onClick={onClick}>
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup {...control} size={size} onClick={onClick}>
          {children}
        </ToggleButtonGroup>
        <ToggleButtonGroup size={size} {...control} onClick={onClick}>
          {children}
        </ToggleButtonGroup>
      </Box>
      <CopyBlock
        language="html"
        text={`<ToggleButtonGroup size="small" {...control}>
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control}>{children}</ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control}>
        {children}
      </ToggleButtonGroup>`}
        codeBlock
        theme={dracula}
        showLineNumbers={true}
        wrapLines={true}
      />
    </>
  );
};
Size.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

export const Color = ({ color }) => {
  // const ArisColorToggleButton = styled.button`
  //   align-items: center;
  //   padding: 10px 16px;
  //   background: #0659d4;
  //   font-family: Inter-Medium;
  //   font-weight: 500;
  //   font-size: 14px;
  //   line-height: 16px;
  //   letter-spacing: 1px;
  //   color: #f9f9f9;
  // `;

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
      {/* <ArisColorToggleButton>Testing</ArisColorToggleButton> */}
    </ToggleButtonGroup>
  );
};

export const Orientation = ({ onClick, orientation }) => {
  const [alignment, setAlignment] = React.useState("option1");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      orientation={orientation}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      disabled="disabled"
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
  );
};

Orientation.propTypes = {
  label: PropTypes.string,
  orientation: PropTypes.bool,
};

export const ExclusiveSelections = ({}) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
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
  );
};

export const MultipleSelections = ({}) => {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
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
  );
};
