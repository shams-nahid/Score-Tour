import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

// import { places } from '../../constants/places';
import { districts } from '../../constants/districts';
import StCustomExpansionPanelList from './st-custom-expansion-panel-list';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '60px 10px 0px 10px',
    textAlign: '-webkit-center',
  },
  itemStyle: {
    paddingBottom: '3px',
  },
}));

const StCustomList = ({ onChangeTravellerScore, isCollapseAll }) => {
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
      {districts.map((district) => (
        <div className={classes.itemStyle}>
          <StCustomExpansionPanelList
            district={district}
            isCollapseAll={isCollapseAll}
            onChangePlaceCheckbox={onChangePlaceCheckbox}
          />
        </div>
      ))}
    </div>
  );
};

export default StCustomList;
