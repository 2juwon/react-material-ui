import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { drawerWidth } from '../Constants';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`
  },
  hide: {
    display: 'none'
  }
}));

const NavBar = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='Open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
