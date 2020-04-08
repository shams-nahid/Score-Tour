import React, { useEffect } from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import StCheckbox from '../basic/st-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setCollapseAllChecked } from '../../actions/collapse-all-action';
import { getDivisions } from '../../actions/division-action';
import { getDistrictById } from '../../actions/district-action';
import StSelect from '../basic/st-select';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '91px',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
    paddingBottom: '3px',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(250, 250, 250)'
  },
  contentStyle: {
    width: '100%',
    maxWidth: '488px',
    display: 'inline-flex',
    justifyContent: 'space-between',
    height: '60px'
  },
  checkBoxStyle: {
    paddingTop: '18px'
  },
  autocompleteStyle: {
    paddingTop: '20px'
  },
  selectStyle: {}
});

const StTopFunctionality = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const divisionSelectLabel = 'Select Division';
  const districts = useSelector(state => state.divisions.divisions);
  const isCollapseAll = useSelector(
    state => state.collapseAll.isCollapseAllChecked
  );

  const onChangeCheckBox = isCollapseAll =>
    dispatch(setCollapseAllChecked(isCollapseAll));

  const onChangeAutoComplete = divisionId =>
    divisionId && dispatch(getDistrictById(divisionId));

  useEffect(() => {
    dispatch(getDivisions());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Paper className={classes.contentStyle}>
        <div className={classes.checkBoxStyle}>
          <StCheckbox
            label={'Collapse All'}
            isChecked={isCollapseAll}
            onChangeCheckBox={onChangeCheckBox}
          />
        </div>
        <div className={classes.selectStyle}>
          {/* <StAutoComplete
            label={divisionSelectLabel}
            options={districts}
            onChangeAutoComplete={onChangeAutoComplete}
          /> */}
          <StSelect
            label={divisionSelectLabel}
            options={districts}
            onChangeAutoComplete={onChangeAutoComplete}
          />
        </div>
      </Paper>
    </div>
  );
};

export default StTopFunctionality;
