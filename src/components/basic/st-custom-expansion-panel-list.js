import React from 'react';
import { makeStyles } from '@material-ui/core';
import StPlaceItem from '../composite/st-place-item';
import StExpansionPanel from './st-expansion-panel';

const useStyles = makeStyles((theme) => ({
  districtContainerStyle: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
  },
  itemContainerStyle: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
  },
  placeItemWrapperStyle: {
    paddingBottom: '5px',
  },
}));

const StCustomExpansionPanelList = ({
  district,
  onChangePlaceCheckbox,
  isCollapseAll,
}) => {
  const classes = useStyles();
  const { places, name } = district;
  return (
    <>
      {places.length ? (
        <div className={classes.districtContainerStyle}>
          <StExpansionPanel districtName={name} expanded={isCollapseAll}>
            {places.map((place) => (
              <div className={classes.placeItemWrapperStyle}>
                <StPlaceItem
                  place={place}
                  onChangePlaceCheckbox={onChangePlaceCheckbox}
                />
              </div>
            ))}
          </StExpansionPanel>
        </div>
      ) : null}
    </>
  );
};

export default StCustomExpansionPanelList;
