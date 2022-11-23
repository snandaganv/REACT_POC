import { Badge } from "@mui/material";
import {
  BadgesBasic,
  BadgeDot,
  BadgeAlignments,
  BadgeVisibility,
} from "../components/Badge";
import { Mail } from "@mui/icons-material";

export default {
  title: "Data Display/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    variant: {
      options: ["dot", "standard"],
      control: { type: "radio" },
    },
  },
};

export const BadgeBasic = BadgesBasic.bind({});
BadgeBasic.args = {
  color: "primary",
  badgeContent: 4,
  anchorOrigin: { vertical: "top", horizontal: "right" },
  icon: <Mail color="action" />,
};
BadgeBasic.parameters = {
  docs: {
    source: {
      code: `
      <Badge color="primary" variant="standard" badgeContent="4">
        <Mail />
      </Badge>`,
      language: "html",
    },
  },
};

export const BadgesDot = BadgeDot.bind({});
BadgesDot.parameters = {
  docs: {
    source: {
      code: `
      <Badge color="primary" variant="dot">
      <Mail />
    </Badge>`,
      language: "html",
    },
  },
};

export const BadgeAlignment = BadgeAlignments.bind({});
BadgeAlignment.parameters = {
  docs: {
    source: {
      code: `
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
    </Badge>`,
      language: "html",
    },
  },
};
export const BadgeVisibilitys = BadgeVisibility.bind({});
BadgeVisibilitys.parameters = {
  docs: {
    source: {
      code: `
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
      </Box>`,
      language: "html",
    },
  },
};
