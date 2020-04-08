import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

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
    zIndex: 99999
  },
  title: {
    paddingTop: '9px',
    paddingBottom: '7px'
  }
});

const StScore = () => {
  const classes = useStyles();
  const travellerScore = useSelector(state => state.score.score);
  return (
    <div className={classes.root}>
      <div className={classes.title}>Your score: {travellerScore}</div>
    </div>
  );
};

export default StScore;
