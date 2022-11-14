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

export const TimelineDefaults = (props) => {
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

TimelineDefaults.propTypes = {
  data: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const ColorsTimeline = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Grey</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Primary</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Success</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Info</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Warning</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Error</TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  );
};

export const OutlinedTimelines = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  );
};

export const OppositeContentTimelines = (props) => {
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

OppositeContentTimelines.propTypes = {
  oppositeTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const CustomizedTimelines = (props) => {
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
CustomizedTimelines.propTypes = {
  customizedTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const LeftAlignedTimelines = (props) => {
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
LeftAlignedTimelines.propTypes = {
  oppositeTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

export const RightAlignedTimelines = (props) => {
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
RightAlignedTimelines.propTypes = {
  oppositeTimelineData: PropTypes.array,
  position: PropTypes.oneOf(["alternate", "left", "right"]),
};

