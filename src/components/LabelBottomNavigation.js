import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const LabelBottomNavigation = () => {
  const [value, setValue] = React.useState('recents');
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label='Recents'
        value='recents'
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label='Favorites'
        value='favorites'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label='Nearby'
        value='nearby'
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label='Folder'
        value='foler'
        icon={<Icon>folder</Icon>}
      />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
