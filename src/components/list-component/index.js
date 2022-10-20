import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon1 from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import { ThemeProvider ,createTheme} from "@mui/material/styles";
import muiTheme from '../../../.storybook/muiTheme';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { FixedSizeList } from 'react-window';

export const BasicLists=(props)=> {
  const {disablePadding,basicLists}=props
  const count=1;
  return (
    <ThemeProvider theme={muiTheme}>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
      {basicLists.map((basicList) =>    
        <List>           
          <ListItem disablePadding={disablePadding} key={basicList.id}>
            <ListItemButton>
            <ListItemIcon>{basicList.icon}</ListItemIcon>
              <ListItemText  primary= {basicList.primary} />
            </ListItemButton>
          </ListItem> 
          {basicList.id == count ? <Divider /> : null}
                        
        </List>)} 
      </nav>
      
      
    </Box>
    </ThemeProvider>
  );
}
/*Nested list*/
   
  export const NestedLists =(props) =>{
    const{basicLists,nestedLists,disablePadding,timeout}=props
    const [open, setOpen] = React.useState(true);
    const handleClick = () => { setOpen(!open);  };
    return (
    <ThemeProvider theme={muiTheme}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav" aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div" id="nested-list-subheader">Nested List Items</ListSubheader>}>
      {basicLists.map((basicList)=>           
          <ListItemButton key={basicList.id}>
          <ListItemIcon>{basicList.icon} </ListItemIcon>
          <ListItemText primary={basicList.primary}/>
          </ListItemButton>
      )}
     {nestedLists.map((nestedList) => {
      return (
          <>        
          <ListItemButton onClick={handleClick} key={nestedList.id}>
          <ListItemIcon>{nestedList.icon} </ListItemIcon>
          <ListItemText primary={nestedList.primary}/>
          {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        <Collapse in={open} timeout={timeout} unmountOnExit>
        <List component="div" disablePadding={disablePadding}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>{nestedList.icon1}</ListItemIcon>
            <ListItemText primary={nestedList.primary1} />
          </ListItemButton>
        </List>
      </Collapse>
        </>
      );
    })}
       </List>  
    </ThemeProvider>
  );
}
/*Folder List*/
export const FolderLists=(props)=> {
  const {folderLists}=props
  return (
    <ThemeProvider theme={muiTheme}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {folderLists.map((folderList) =>
      <ListItem key={folderList.id}>
        <ListItemAvatar><Avatar>{folderList.icon}</Avatar></ListItemAvatar>
        <ListItemText primary={folderList.label} secondary={folderList.date} />
      </ListItem>)}       
    </List>
    </ThemeProvider>
  );
}
/*Intearctive*/
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const InteractiveLists = (props) => {
  const{interactiveLists,edge}=props;
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <ThemeProvider theme={muiTheme}>
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <FormControlLabel control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)}/>} label="Enable dense"/>
        <FormControlLabel control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />} label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography>
          <Demo>
            <List dense={dense}>
              {interactiveLists.map((interactiveList)=>
                <ListItem>
                  <ListItemText
                    primary={interactiveList.primary}
                    secondary={secondary ? interactiveList.secondary : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              { interactiveLists.map((interactiveList)=>
                <ListItem>
                  <ListItemIcon>
                    {interactiveList.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={interactiveList.primary}
                    secondary={secondary ? interactiveList.secondary : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
          <Demo>
            <List dense={dense}>
            { interactiveLists.map((interactiveList)=>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{interactiveList.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={interactiveList.primary}
                    secondary={secondary ? interactiveList.secondary : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List dense={dense}>
              {interactiveLists.map((interactiveList)=>
                <ListItem
                  secondaryAction={
                    <IconButton edge={edge} aria-label="delete">
                      {interactiveList.icon1}
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>{interactiveList.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={interactiveList.primary}
                    secondary={secondary ? interactiveList.secondary : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
}


/*Selected List Item*/
export const SelectedListItems=(props)=> {
  const{selectedListItems}=props
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {setSelectedIndex(index); };
  return (
    <ThemeProvider theme={muiTheme}>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {selectedListItems.map((selectedListItem)=>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton selected={selectedIndex === selectedListItem.id}
          onClick={(event) => handleListItemClick(event, selectedListItem.id)}>
          <ListItemIcon>{selectedListItem.icon}</ListItemIcon>
          <ListItemText primary={selectedListItem.primary} />
        </ListItemButton>
      </List>      
      )}          
    </Box>
    </ThemeProvider>
  );

}

/* Align List Item*/
export const AlignItemsLists=(props)=> {
  const {alignmentLists,alignItems,dvariant,src,variant,color} = props;
  return (
    <ThemeProvider theme={muiTheme}>
    {alignmentLists.map((alignmentList,index) =>  
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>          
      <ListItem alignItems={alignItems} key={index}>
        <ListItemAvatar> <Avatar alt="Remy Sharp" src={src} /></ListItemAvatar>
        <ListItemText primary={alignmentList.primary} secondary={
            <React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant={variant} color={color}>
               {alignmentList.secondaryText1}
              </Typography>
              {alignmentList.secondaryText2}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant={dvariant} component="li" />
     
    </List> )}
    </ThemeProvider>
  );
}
/*List Control - checkbox*/
export const CheckboxLists=(props)=> {
  const {checkboxLists,edge,disablePadding,disableRipple,cedge,dense}=props;
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ThemeProvider theme={muiTheme}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {checkboxLists.map((checkboxList) => {
        return (
          <ListItem key={checkboxList}
            secondaryAction={
              <IconButton edge={edge} aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding={disablePadding}
          >
            <ListItemButton role={undefined} onClick={handleToggle(checkboxList)} dense={dense}>
              <ListItemIcon>
                <Checkbox
                  edge={cedge}
                  checked={checked.indexOf(checkboxList) !== -1}
                  tabIndex={-1}
                  disableRipple={disableRipple}
                  inputProps={{ 'aria-labelledby': checkboxList }}
                />
              </ListItemIcon>
              <ListItemText id={checkboxList} primary={checkboxList} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </ThemeProvider>
  );
}

/*Switch*/

export const SwitchListSecondarys = (props) => {
  const {switchLists,edge} = props
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ThemeProvider theme={muiTheme}>   
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Settings</ListSubheader>}>
         {switchLists.map((switchList)=>
      <ListItem>
        <ListItemIcon>
         {switchList.icon}
        </ListItemIcon>
        <ListItemText id={switchList.id} primary={switchList.primary} />
        <Switch
          edge={edge}
          onChange={handleToggle(switchList.value)}
          checked={checked.indexOf(switchList.value) !== -1}
          inputProps={{
            'aria-labelledby': switchList.id,
          }}
        />
      </ListItem>)}
      
    </List>
    </ThemeProvider>
  );
}

/*Sticky subheader*/

export const  PinnedSubheaderLists = (props) => {
    const {pinnedSubheaderLists,pinnedSubLists} = props
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {pinnedSubheaderLists.map((pinnedSubheaderList) => (
        <li key={pinnedSubheaderList}>
          <ul>
            <ListSubheader>{pinnedSubheaderList}</ListSubheader>
            {pinnedSubLists.map((pinnedSubList) => (
              <ListItem key={pinnedSubLists}>
                <ListItemText primary={pinnedSubList} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}


/*Gutterless List*/

export const GutterlessLists = (props) => {
  const {gutterlessLists,disableGutters} = props
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {gutterlessLists.map((gutterlessList) => (
        <ListItem
          key={gutterlessList.id}
          disableGutters={disableGutters}
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={gutterlessList.primary} />
        </ListItem>
      ))}
    </List>
  );
}


/*virtual list*/
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export const VirtualizedLists =(props)=> {
  const {itemCount}=props
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={itemCount}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
