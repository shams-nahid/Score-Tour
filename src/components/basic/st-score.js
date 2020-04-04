import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '53px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingBottom: '3px',
    width: '100%',
    backgroundColor: '#c5cae9',
    zIndex: 99999,
  },
  title: {
    paddingTop: '9px',
    paddingBottom: '7px',
  },
});

const StScore = ({ travellerScore = 0 }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Your score: {travellerScore}</div>
    </div>
  );
};

export default StScore;
