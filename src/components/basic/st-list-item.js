import React from 'react';
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    display: 'inline-block',
    '& .MuiListItemText-root': {
      display: 'inline-flex',
      position: 'relative',
      bottom: '6px',
      width: '100px'
    },
    '& .MuiListItemIcon-root': {
      minWidth: '30px'
    }
  }
}));

const StListItem = ({ value, labelId, id, name, score }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
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
    <ListItem
      key={value}
      role={undefined}
      dense
      button
      onClick={handleToggle(value)}
      className={classes.root}
    >
      <ListItemIcon>
        <Checkbox
          edge='start'
          checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          color='primary'
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={name} />
      <ListItemText edge='end' id={labelId} primary={score} />
    </ListItem>
  );
};

export default StListItem;
