import React from 'react';
import { makeStyles } from '@material-ui/core';
import StPlaceItem from './st-place-item';
import StExpansionPanel from '../basic/st-expansion-panel';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  districtContainerStyle: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px'
  },
  itemContainerStyle: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px'
  },
  placeItemWrapperStyle: {
    paddingBottom: '5px'
  }
}));

const StCustomExpansionPanelList = ({ district }) => {
  const classes = useStyles();
  const isCollapseAll = useSelector(
    state => state.collapseAll.isCollapseAllChecked
  );

  const { id, name } = district;

  const places = useSelector(state => state.places.places)[id] || [];

  return (
    <>
      {places.length ? (
        <div className={classes.districtContainerStyle}>
          <StExpansionPanel districtName={name} expanded={isCollapseAll}>
            {places.map(place => (
              <div className={classes.placeItemWrapperStyle}>
                <StPlaceItem place={place} />
              </div>
            ))}
          </StExpansionPanel>
        </div>
      ) : null}
    </>
  );
};

export default StCustomExpansionPanelList;
