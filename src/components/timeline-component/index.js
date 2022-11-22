import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent, {
  timelineContentClasses,
} from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import Typography from "@mui/material/Typography";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { PropTypes } from "prop-types";
import { Icon } from "@mui/material";

export const TimelinesBasic = (props) => {
  const { data, position } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position={position}>
        {data.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={label.color} variant={label.variant} />
              {index < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{label.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};

TimelinesBasic.propTypes = {
  data: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const TimelinesColors = (props) => {
  const { data, position } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position={position}>
        {data.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={label.color} variant={label.variant} />
              {index < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{label.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};

export const TimelinesOutlined = (props) => {
  const { data, position } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position={position}>
        {data.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={label.color} variant={label.variant} />
              {index < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{label.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};

export const TimelinesOppositeContent = (props) => {
  const { oppositeTimelineData, position } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position={position}>
        {oppositeTimelineData.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              {label.oppositeLabel}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={label.color} variant={label.variant} />
              {index < oppositeTimelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{label.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};

TimelinesOppositeContent.propTypes = {
  oppositeTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const TimelinesCustomized = (props) => {
  const { customizedTimelineData, position } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position={position}>
        {customizedTimelineData.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              {label.oppositeLabel}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={label.color} variant={label.variant}>
                <Icon>{label.icon}</Icon>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                {label.label}
              </Typography>
              <Typography>{label.text}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};
TimelinesCustomized.propTypes = {
  customizedTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const TimelinesLeftAligned = (props) => {
  const { oppositeTimelineData } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {oppositeTimelineData.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              {label.oppositeLabel}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={label.color} variant={label.variant} />
              {index < oppositeTimelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{label.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};
TimelinesLeftAligned.propTypes = {
  oppositeTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const TimelinesRightAligned = (props) => {
  const { oppositeTimelineData, position } = props;

  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline
        sx={{
          [`& .${timelineContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {oppositeTimelineData.map((label, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              {label.oppositeLabel}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={label.color} variant={label.variant} />
              {index < oppositeTimelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{label.label}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ThemeProvider>
  );
};
TimelinesRightAligned.propTypes = {
  oppositeTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

