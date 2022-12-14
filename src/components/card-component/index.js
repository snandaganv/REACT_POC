import * as React from 'react';
import { PropTypes } from "prop-types";
import { Card, CardHeader, CardContent, CardActions } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';


const CardComponent = (props) => {
  const { topoGraphyArray, buttonArray, headersArray, cardMediaArray, raised } = props;
  return (
    <ThemeProvider theme={muiTheme}>

      <Card raised={raised} sx={{ maxWidth: 345 }}>
        {headersArray && headersArray.map(({ avatar, action, title, subheader, id }) => (
          <CardHeader
            key={id}
            avatar={
              avatar ? (
                <Avatar style={{ backgroundColor: avatar.bgColor }}>
                  {avatar.label}
                </Avatar>
              ) : (
                false
              )
            }
            action={
              action ? (
                <IconButton aria-label={action.iconLabel}>
                  {action.icon}
                </IconButton>
              ) : (
                false
              )}
            title={title.label}
            subheader={subheader.label}
          />
        ))
        }
        {cardMediaArray.length && cardMediaArray.map((item) => <CardMedia key={item.component} component={item.component} height={item.height} image={item.image} alt={item.alt} />)}
        < CardContent >
          {topoGraphyArray && topoGraphyArray.map((item) => <Typography key={item.variant} variant={item.variant}>{item.text}</Typography>)}
        </CardContent>
        <CardActions>
          {buttonArray && buttonArray.map((item) => <Button key={item.size} size={item.size}>{item.label}</Button>)}
        </CardActions>
      </Card>

    </ThemeProvider >
  );
}

CardComponent.prototype = {

  raised: PropTypes.bool,
  headersArray: PropTypes.array,
  cardMediaArray: PropTypes.array,
  buttonArray: PropTypes.array,
  topoGraphyArray: PropTypes.array
};

CardComponent.defaultProps = {

  raised: false,
  headersArray: [],
  cardMediaArray: [],
  buttonArray: [],
  topoGraphyArray: []
};


export default CardComponent;
