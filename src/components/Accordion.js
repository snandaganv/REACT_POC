import * as React from "react";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export const AccordionBasic = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Accordion {...props}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panel-content" + index}
              id={"panel-header" + index}
            >
              <Typography key={"header_" + index}>{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails {...props}>
              <Typography key={"content" + index}>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

AccordionBasic.prototype = {
  data: PropTypes.array,
};

AccordionBasic.defaultProps = {
  data: [],
};

export const AccordionControlled = (props) => {
  const { data } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <Accordion
              expanded={expanded === "panel" + index}
              onChange={handleChange("panel" + index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel-content" + index}
                id={"panel-header" + index}
              >
                <Typography
                  sx={{ width: "33%", flexShrink: 0 }}
                  key={"header_" + index}
                >
                  {item.heading}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary" }}
                  key={"secondary" + index}
                >
                  {item.secondaryHeading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails {...props}>
                <Typography key={"content" + index}>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
};
AccordionControlled.prototype = {
  data: PropTypes.array,
};

AccordionControlled.defaultProps = {
  data: [],
};

export const AccordionCustomization = (props) => {
  const { data } = props;
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  const [expanded, setExpanded] = React.useState("panel");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <Accordion
              expanded={expanded === "panel" + index}
              onChange={handleChange("panel" + index)}
            >
              <AccordionSummary
                aria-controls={"panel-content" + index}
                id={"panel-header" + index}
              >
                <Typography key={"header_" + index}>{item.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails {...props}>
                <Typography key={"content" + index}>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
};
AccordionCustomization.prototype = {
  data: PropTypes.array,
};

AccordionCustomization.defaultProps = {
  data: [],
};
