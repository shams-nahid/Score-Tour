import React from 'react';
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

const StCustomList = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {places.map(place => (
        <div className={classes.itemStyle}>
          <StCustomListItem place={place} />
        </div>
      ))}
    </div>
  );
};

export default StCustomList;
