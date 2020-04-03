import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import { places } from '../../constants/places';
import StCustomListItem from './st-custom-list-item';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '60px 10px 0px 10px',
    textAlign: '-webkit-center'
  },
  itemStyle: {
    paddingBottom: '3px'
  }
}));

const StCustomList = ({ onChangeTravellerScore }) => {
  const classes = useStyles();
  const [totalScore, setTotalScore] = useState(0);

  const onChangePlaceCheckbox = (checkStatus, score) =>
    checkStatus
      ? setTotalScore(totalScore + score)
      : setTotalScore(totalScore - score);

  useEffect(() => {
    onChangeTravellerScore(totalScore);
  }, [totalScore]);

  return (
    <div className={classes.container}>
      {places.map(place => (
        <div className={classes.itemStyle}>
          <StCustomListItem
            place={place}
            onChangePlaceCheckbox={onChangePlaceCheckbox}
          />
        </div>
      ))}
    </div>
  );
};

export default StCustomList;
