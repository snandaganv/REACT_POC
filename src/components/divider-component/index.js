import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ThemeProvider ,createTheme} from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import MuiGrid from '@mui/material/Grid';
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export const ListDividers=(props)=> {
    const {listDividers,light}=props;
  return (
    <ThemeProvider theme={muiTheme}>
         {listDividers.map((listDivider)=>
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button key={listDivider.id}>
        <ListItemText primary={listDivider.primary} />
      </ListItem>
      <Divider light={light} />
      
    </List>)}
    </ThemeProvider>
  );
}
/*Inset dividers*/
export const InsetDividers=(props)=> {
  const {insetDividers,variant,component}=props
  return (
    <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper',}} >
      {insetDividers.map((insetDivider)=>
      <>
      <ListItem key={insetDivider.id}>
        <ListItemAvatar>
          <Avatar>
            {insetDivider.icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={insetDivider.primary} secondary={insetDivider.secondary} />
      </ListItem>
      <Divider variant={variant} component={component} />
      
      
      </>)}
    </List>
  );
}

/*Subheader divider*/
export const SubheaderDividers=(props)=> {
  const {dividers,subdividers,component,variant}=props
    return (
      <ThemeProvider theme={muiTheme}>
      <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper',}}>
        {dividers.map((divider)=>
        <>
        <ListItem key={divider.id}>
          <ListItemText primary={divider.primary} secondary={divider.secondary} />
        </ListItem>
        <Divider  variant={divider.variant}/>
        </>)}
        {subdividers.map((subdivider)=>
        <>
        <ListItem key={subdivider.id}>
          <ListItemAvatar>
            <Avatar>
              {subdivider.icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={subdivider.primary} secondary={subdivider.secondary} />
        </ListItem>
        </>
        )}
      </List>
      </ThemeProvider>
    );
  }
  /*Middle Divider*/
  export const MiddleDividers =(props)=> {
    const {variant} = props
    return (
        <ThemeProvider theme={muiTheme}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Toothbrush
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                $4.50
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
            just down the hall.
          </Typography>
        </Box>
        <Divider variant={variant} />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Select type
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Extra Soft" />
            <Chip color="primary" label="Soft" />
            <Chip label="Medium" />
            <Chip label="Hard" />
          </Stack>
        </Box>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Button>Add to cart</Button>
        </Box>
      </Box>
      </ThemeProvider>
    );
  }
  /*Divider Text*/
  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
  
  export const DividerTexts=(props)=> {
    const {content,textaligns}=props   
  
    return (
        <ThemeProvider theme={muiTheme}>
      <Root>
        {textaligns.map((textalign)=>
        <>
        {content}
        <Divider textAlign={textalign.align}>{textalign.text}</Divider>
        </>
        )}
      
             </Root>
      </ThemeProvider>
    );
  }
  /*Vertical Divider*/
  export const VerticalDividers=(props)=> {
    const {orientation,flexItem}=props
    return (
        <ThemeProvider theme={muiTheme}>
      <div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
        >
          <FormatAlignLeftIcon />
          <FormatAlignCenterIcon />
          <FormatAlignRightIcon />
          <Divider orientation={orientation} flexItem={flexItem} />
          <FormatBoldIcon />
          <FormatItalicIcon />
        </Box>
      </div>
      </ThemeProvider>
    );
  }
  /*verical with middle variant*/
  export const VerticalDividerMiddles=(props)=> {
    const{orientation,variant,flexItem}=props
    return (
        <ThemeProvider theme={muiTheme}>
      <div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
        >
          <FormatAlignLeftIcon />
          <FormatAlignCenterIcon />
          <FormatAlignRightIcon />
          <Divider orientation={orientation} variant={variant} flexItem={flexItem} />
          <FormatBoldIcon />
          <FormatItalicIcon />
        </Box>
      </div>
      </ThemeProvider>
    );
  }
/*vertical wit h text*/


export const VerticalDividerTexts=(props)=> {
  const {content,orientation,flexItem}=props;
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));

  return (
    <Grid container>
      <Grid item xs>
        {content}
      </Grid>
      <Divider orientation={orientation} flexItem={flexItem}>
        VERTICAL
      </Divider>
      <Grid item xs>
        {content}
      </Grid>
    </Grid>
  );
}

  