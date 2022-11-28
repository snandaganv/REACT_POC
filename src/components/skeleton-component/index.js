import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const SkeletonDefaults = (props) => {
  const { variant, width, height, animation } = props;
  return (
    <Stack spacing={1}>
      <Skeleton
        variant={variant}
        width={width}
        height={height}
        animation={animation}
      />
    </Stack>
  );
};

SkeletonDefaults.prototype = {
  variant: PropTypes.oneOf(["text", "reactangle", "rounded", "circular"]),
  animation: PropTypes.oneOf(["pulse", "wave", false]),
  width: PropTypes.number,
  height: PropTypes.number,
};

SkeletonDefaults.defaultProps = {
  variant: "text",
  animation: "pulse",
  width: 400,
  height: 15,
};

export const SkeletonsVariants = (props) => {
  const { skeletonData } = props;
  return (
    <Stack spacing={1}>
      {skeletonData.map((data) => (
        <Skeleton
          variant={data.variant}
          width={data.width}
          height={data.height}
        />
      ))}
    </Stack>
  );
};

SkeletonsVariants.prototype = {
  skeletonData: PropTypes.array,
};

export const SkeletonsAnimations = (props) => {
  const { skeletonData } = props;
  return (
    <Box sx={{ width: 300 }}>
      {skeletonData.map((data) => (
        <Skeleton
          variant={data.variant}
          animation={data.animation}
          width={data.width}
          height={data.height}
        />
      ))}
    </Box>
  );
};

SkeletonsAnimations.prototype = {
  skeletonData: PropTypes.array,
};

export const SkeletonPulsateExamples = (props) => {
  const { data, loading, animation } = props;
  const length = data.length;
  const Media = (props) => {
    const { loading } = props;
    return (
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(length)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (
              <img
                style={{ width: 210, height: 118 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton
                animation={animation}
                variant="rectangular"
                width={210}
                height={118}
              />
            )}

            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="caption"
                  color="text.secondary"
                >
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton animation={animation} />
                <Skeleton animation={animation} width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    );
  };
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading={loading} />
    </Box>
  );
};

SkeletonPulsateExamples.prototype = {
  data: PropTypes.array,
};

export const SkeletonWaveExamples = (props) => {
  const Mediaa = (props) => {
    const { loading = false } = props;

    return (
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              "Ted"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              "5 hours ago"
            )
          }
        />
        {loading ? (
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
        ) : (
          <CardMedia
            component="img"
            height="140"
            image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            alt="Nicola Sturgeon on a TED talk stage"
          />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {
                "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
              }
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  };
  return (
    <div>
      <Mediaa loading />
      <Mediaa />
    </div>
  );
};
