import { IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';

export function Header() {
  return (
    <AppBar position="static">
        <Toolbar style={{
          justifyContent: 'space-between'
        }}>
          <Typography variant="h5" color="inherit">
            Ähhhmalizer
          </Typography>
          <IconButton
            aria-owns={'menu-appbar'}
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}