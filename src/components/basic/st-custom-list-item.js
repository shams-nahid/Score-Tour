import React from 'react';
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  makeStyles,
  Box,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    // width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px'
  },
  nameStyle: {
    textAlign: 'initial',
    paddingTop: '3px'
  },
  scoreStyle: {
    paddingTop: '3px'
  },
  checkboxStyle: {
    '& .MuiCheckbox-root': {
      padding: '1px 9px 0px 5px'
    }
  },
  scoreCheckboxContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const StCustomListItem = ({ place }) => {
  const classes = useStyles();

  const { name, score } = place;

  return (
    <Paper elevation={2} button className={classes.root}>
      <div className={classes.nameStyle}>{name}</div>
      <div className={classes.scoreCheckboxContainerStyle}>
        <div className={classes.scoreStyle}>{score}</div>
        <div className={classes.checkboxStyle}>
          <Checkbox
            edge='end'
            checked={false}
            tabIndex={-1}
            disableRipple
            color='primary'
          />
        </div>
      </div>
    </Paper>
  );
};

export default StCustomListItem;
