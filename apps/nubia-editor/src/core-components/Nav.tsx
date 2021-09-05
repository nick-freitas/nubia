import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className="flex">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <NavLink to="/">
            <MenuItem onClick={handleClose}>Gamebooks</MenuItem>
          </NavLink>
          <NavLink to="/about">
            <MenuItem onClick={handleClose}>About</MenuItem>
          </NavLink>
        </Menu>
        <Typography variant="h6" className="flex-1">
          Nubia
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
