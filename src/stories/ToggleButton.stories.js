import {
  ToggleButtons,
  ToggleButtonSize,
  ToggleButtonColor,
  ToggleButtonOrientation,
  ToggleButtonExclusiveSelections,
  ToggleButtonMultipleSelections,
} from "../components/ToggleButton";

export default {
  title: "Input/Toggle Button",
  component: ToggleButtons,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};

export const ToggleButtonBasic = ToggleButtons.bind({});
ToggleButtonBasic.args = {
  color: "primary",
  disabled: false,
  data: [
    {
      toggleButtonValue: "web",
      toggleButtonLabel: "Web",
    },
    {
      toggleButtonValue: "android",
      toggleButtonLabel: "Android ",
    },
    {
      toggleButtonValue: "ios",
      toggleButtonLabel: "iOS ",
    },
  ],
};
ToggleButtonBasic.parameters = {
  docs: {
    source: {
      code: `const data = [
        {
          toggleButtonValue: "web",
          toggleButtonLabel: "Web",
        },
        {
          toggleButtonValue: "android",
          toggleButtonLabel: "Android ",
        },
        {
          toggleButtonValue: "ios",
          toggleButtonLabel: "iOS ",
        },
      ]
      <ToggleButtonGroup
      color="primary"
      size="medium"
    >
      {data.map((item, index) => {
        return (
          <ToggleButton
            value={item.toggleButtonValue}
            key={index}
            disabled=false
          >
            {item.toggleButtonLabel}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const ToggleButtonSizes = ToggleButtonSize.bind({});
ToggleButtonSizes.parameters = {
  docs: {
    source: {
      code: `const [alignment, setAlignment] = React.useState("option1");
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
    </Box>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const ToggleButtonColors = ToggleButtonColor.bind({});
ToggleButtonColors.parameters = {
  docs: {
    source: {
      code: `const [alignment, setAlignment] = React.useState("web");
      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const ToggleButtonOrientations = ToggleButtonOrientation.bind({});
ToggleButtonOrientations.parameters = {
  docs: {
    source: {
      code: `const [alignment, setAlignment] = React.useState("option1");
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
    </ToggleButtonGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const ToggleButtonExclusiveSelection =
  ToggleButtonExclusiveSelections.bind({});
ToggleButtonExclusiveSelection.parameters = {
  docs: {
    source: {
      code: `const [alignment, setAlignment] = React.useState("left");

      const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
      };
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
      </ToggleButtonGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const ToggleButtonMultipleSelection =
  ToggleButtonMultipleSelections.bind({});
ToggleButtonMultipleSelection.parameters = {
  docs: {
    source: {
      code: `const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
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
      </ToggleButtonGroup>`,
      language: "react",
      type: "JSX",
    },
  },
};
