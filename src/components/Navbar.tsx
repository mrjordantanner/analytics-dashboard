import React from 'react';
import { Toolbar, Tabs, Tab, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

  interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
    onChange: (index: number) => void;
}
export default function Navbar({isMobile, selectedTabIndex, onChange}: Props) {
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };
      const navBarDesktop = {
        backgroundColor: 'white',
        //border: '1px solid red',
        display: 'flex',
        height: '100%',
        width: '60px',
        left: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px 0px',
        zIndex: 500
      };
    
      const navBarMobile = {
        backgroundColor: 'white',
        borderTop: '4px solid #6b75ca',
        display: 'absolute',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '60px',
        zIndex: 500
      };

      const tabStyle = {
        border: '1px solid lightgrey',
        flex: 1,
        minWidth: '60px',
        color: '#6b75ca'
      }

      const navButtonStyle = {
        //border: '1px solid blue',
        maxWidth: '30px',
        display: 'block',
        color: '#6b75ca'
      }

    return(
        <>
          <Toolbar sx={isMobile ? navBarMobile : navBarDesktop}>

             <Button sx={navButtonStyle}><HomeIcon /></Button>

            <Tabs 
                sx={{ width: isMobile ? '100vw' : '60px' }} 
                value={selectedTabIndex} 
                onChange={handleChange} 
                orientation={isMobile ? "horizontal" : "vertical"}
                aria-label="navigation tabs">

                  <Tab label="Data 1" sx={tabStyle}/>
                  <Tab label="Data 2" sx={tabStyle}/>
                  <Tab label="Data 3" sx={tabStyle}/>

              </Tabs> 

              <Button sx={navButtonStyle}><LogoutIcon /></Button>

          </Toolbar>
    
        </>
)};
