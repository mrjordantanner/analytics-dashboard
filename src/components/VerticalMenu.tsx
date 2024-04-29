import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function VerticalMenu() {
    const [anchorElement, setAnchorElement] = React.useState<EventTarget | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorElement(null);
    };

    return (
        <div>
          <IconButton
            aria-controls="vertical-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="vertical-menu"
            anchorEl={anchorElement as Element}
            keepMounted
            open={Boolean(anchorElement)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </div>
      );
};

 VerticalMenu;