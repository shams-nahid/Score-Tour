import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import StListItem from './st-list-item';
import { places } from '../../constants/places';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '33px',
    '& .MuiListItem-container': {
      maxWidth: '400px'
    }
  },
  root: {}
}));

const StList = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <List className={classes.root}>
        {places.map(({ id, name, score }) => {
          const labelId = `checkbox-list-label-${id}`;
          return (
            <StListItem
              id={id}
              name={name}
              score={score}
              value={id}
              labelId={labelId}
            />
          );
        })}
      </List>
    </div>
  );
};

export default StList;
