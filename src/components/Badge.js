import React from "react";
import {
  Badge,
  Box,
  Switch,
  FormControlLabel,
  ButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { ShoppingCart, Remove, Add, Mail } from "@mui/icons-material";
import Button from "@mui/material/Button";

export const MailBadge = ({
  color,
  badgeContent,
  anchorOrigin,
  max,
  variant,
}) => {
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      anchorOrigin={anchorOrigin}
      max={max}
      variant={variant}
    >
      <Mail color="action" />
    </Badge>
  );
};

export const ShoppingCartBadge = ({
  color,
  badgeContent,
  anchorOrigin,
  max,
  variant,
}) => {
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      anchorOrigin={anchorOrigin}
      max={max}
      variant={variant}
    >
      <ShoppingCart color="action" />
    </Badge>
  );
};

export const Customizations = ({ badgeContent }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCart />
      </StyledBadge>
    </IconButton>
  );
};

export const DotBadge = ({ variant }) => {
  return (
    <Badge color="secondary" variant="dot">
      <Mail />
    </Badge>
  );
};

export const BadgeAlignments = ({ anchorOrigin }) => {
  return (
    <>
      <Badge
        badgeContent={4}
        color="secondary"
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
        color="secondary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Mail />
      </Badge>
    </>
  );
};

export const BadgeVisibility = ({ badgeContent }) => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
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
        <Badge color="secondary" badgeContent={count}>
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
        <Badge color="secondary" variant="dot" invisible={invisible}>
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
  );
};
