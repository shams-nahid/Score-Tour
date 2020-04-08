import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '56px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    paddingBottom: '3px',
    width: '100%',
    backgroundColor: '#c5cae9',
    zIndex: 1,
    borderTop: '6px solid white'
  },
  title: {
    paddingTop: '4px',
    paddingBottom: '2px'
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
