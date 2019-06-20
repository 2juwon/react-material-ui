import React from 'react';
import { sizing } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import DrawerLeft from './components/DrawerLeft';
import { drawerWidth } from './Constants';
import SwipeableMenuDrawer from './components/SwipeableMenuDrawer';

const userStyle = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  button: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(40),
    paddingRight: theme.spacing(40)
  },
  content: {
    backgroundColor: 'aqua',
    height: '100vh'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

function App() {
  const classes = userStyle();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SwipeableMenuDrawer open={open} toggleDrawer={toggleDrawer} />
      {/* <DrawerLeft open={open} handleDrawerClose={handleDrawerClose} /> */}
      <main className={classes.main}>
        <div className={classes.content}>
          <div className={classes.drawerHeader} />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
          >
            primary
          </Button>

          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
          >
            secondary
          </Button>
          <Button
            variant='contained'
            color='default'
            className={classes.button}
          >
            default
          </Button>
          <LabelBottomNavigation />
        </div>
      </main>
    </div>
  );
}

export default App;
