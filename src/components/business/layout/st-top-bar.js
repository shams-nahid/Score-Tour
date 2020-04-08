import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    '& .MuiToolbar-gutters': {
      paddingLeft: '6px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
      marginLeft: '-5px'
    },
    '& .MuiToolbar-root': {
      // paddingBottom: '7px'
      // height: '63px'
    }
  },
  menuButton: {
    margin: '0 0 0 0'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block'
    },
    fontWeight: 'bold',
    fontSize: '18px',
    marginLeft: '-8px'
  },
  search: {
    bottom: '2px',
    width: '120px !important',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    paddingLeft: '42px !important',
    [theme.breakpoints.up('xs')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const StTopBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <ExploreIcon />
          </IconButton>
          <Typography className={classes.title} noWrap>
            Tour Score
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StTopBar;

// root: {
//   position: 'fixed',
//   top: 0,
//   zIndex: '9999'
// }
