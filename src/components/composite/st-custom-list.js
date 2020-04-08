import React from 'react';
import { makeStyles } from '@material-ui/core';

import StCustomExpansionPanelList from './st-custom-expansion-panel-list';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '60px 10px 50px 10px',
    textAlign: '-webkit-center'
  }
}));

const StCustomList = () => {
  const classes = useStyles();

  const districts = useSelector(state => state.districts.districts);

  return (
    <div className={classes.container}>
      {districts.map(district => (
        <div key={district.id}>
          <StCustomExpansionPanelList district={district} />
        </div>
      ))}
    </div>
  );
};

export default StCustomList;
