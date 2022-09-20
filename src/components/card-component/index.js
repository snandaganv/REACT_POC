import * as React from 'react';
import { PropTypes } from "prop-types";
import { Card,CardHeader,CardContent,CardActions} from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const CardComponent = (props) => {
  const {topoGraphyArray,buttonArray,headersArray,cardMediaArray,raised} = props;
  return (
    <Card raised={raised}>
      
      {headersArray && headersArray.map((item) => <CardHeader avatar={item.avatar?<Avatar sx={{ bgcolor: item.bgColor }}>{item.label}</Avatar>: false }>{item.text}
        action={item.action?<IconButton aria-label={item.iconLabel}>
            <MoreVertIcon />
          </IconButton> : false}
      </CardHeader>)}
      
      {cardMediaArray.length && cardMediaArray.map((item) => <CardMedia component={item.component} height={item.height} image={item.image} alt={item.alt}/>)}
      <CardContent>
      {topoGraphyArray && topoGraphyArray.map((item) => <Typography variant={item.variant}>{item.text}</Typography>)}
      </CardContent>
      <CardActions>
      {buttonArray && buttonArray.map((item) => <Button size={item.size}>{item.label}</Button>)}
      </CardActions>
    </Card>
  );
}

CardComponent.prototype = {
    
    raised: PropTypes.bool,
    headersArray:PropTypes.array,
    cardMediaArray:PropTypes.array,
    buttonArray:PropTypes.array,
    topoGraphyArray:PropTypes.array
};

CardComponent.defaultProps = {
    
    raised:false,
    headersArray:[],
    cardMediaArray:[],
    buttonArray:[],
    topoGraphyArray:[]
};


export default CardComponent;
