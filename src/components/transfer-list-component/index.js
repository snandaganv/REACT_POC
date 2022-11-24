import * as React from 'react';
import { PropTypes } from "prop-types";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
function union(a, b) {
  return [...a, ...not(b, a)];
}

export const TransfersListComponent = (props) => {
  const { extendedTransferList, leftListText, rightListText, leftListArray, rightListArray } = props;
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(leftListArray);
  const [right, setRight] = React.useState(rightListArray);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const numberOfChecked = (items) =>
    intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

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

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items, title) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      {extendedTransferList && (<>
        <CardHeader
          sx={{ px: 2, py: 1 }}
          avatar={
            <Checkbox
              onClick={handleToggleAll(items)}
              checked={numberOfChecked(items) === items.length && items.length !== 0}
              indeterminate={
                numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
              }
              disabled={items.length === 0}
              inputProps={{
                'aria-label': 'all items selected',
              }}
            />
          }
          title={title}
          subheader={`${numberOfChecked(items)}/${items.length} selected`}
        />
        <Divider />
      </>
      )}
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>{extendedTransferList ? customList(left, leftListText) : customList(left)}</Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              {!extendedTransferList && (<Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllRight}
                disabled={left.length === 0}
                aria-label="move all right"
              >
                ≫
              </Button>)}
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right"
              >
                &gt;
              </Button>
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left"
              >
                &lt;
              </Button>
              {!extendedTransferList && (<Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
                aria-label="move all left"
              >
                ≪
              </Button>)}
            </Grid>
          </Grid>
          <Grid item>{extendedTransferList ? customList(right, rightListText) : customList(right)}</Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}



TransfersListComponent.prototype = {
  extendedTransferList: PropTypes.boolean,
  leftListText: PropTypes.string,
  rightListText: PropTypes.string,
  leftListArray: PropTypes.any,
  rightListArray: PropTypes.any
};

TransfersListComponent.defaultProps = {
  extendedTransferList: true,
  leftListText: 'Choices',
  rightListText: 'Chosen',
  leftListArray: ['item 1', 'item 2', 'item 3'],
  rightListArray: ['item 4', 'item 5', 'item 6'],
};


//export default TransferListComponent;