import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import StCheckbox from './st-checkbox';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '97px',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
    paddingBottom: '3px',
    width: '100%',
    zIndex: 99999,
    backgroundColor: 'rgb(250, 250, 250)'
  },
  contentStyle: {
    width: '100%',
    maxWidth: '488px',
    display: 'inline-flex'
  }
});

const StTopFunctionality = ({ onChangeIsCollapseAll, isCollapseAll }) => {
  const classes = useStyles();
  const onChangeCheckBox = isCollapseAll => {
    onChangeIsCollapseAll(isCollapseAll);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.contentStyle}>
        <div>
          <StCheckbox
            label={'Collapse All'}
            isChecked={isCollapseAll}
            onChangeCheckBox={onChangeCheckBox}
          />
        </div>
      </Paper>
    </div>
  );
};

export default StTopFunctionality;
