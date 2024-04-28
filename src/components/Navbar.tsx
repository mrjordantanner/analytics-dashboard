import React, { useState } from 'react';
import { Toolbar, Tabs, Tab } from '@mui/material';

  interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
    onChange: (index: number) => void;
}

export default function Navbar({isMobile, selectedTabIndex, onChange}: Props) {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);

  };

    const navBarDesktop = {
        display: 'flex',
        backgroundColor: 'tomato',
        height: '100%',
        width: '60px',
        left: 0,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      };
    
      const navBarMobile = {
        backgroundColor: 'yellow',
        display: 'flex',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '60px',
      };

      const tabsContainerStyle = {
        backgroundColor: 'lightgrey',
        display: 'flex',
        left: 0,
      }

      const tabStyle = {
        backgroundColor: 'red',
      }

    return(
        <>

          <Toolbar sx={isMobile ? navBarMobile : navBarDesktop}>

            {isMobile ? 

            <Tabs 
              sx={{ width: '100vw', ...tabsContainerStyle }} 
              value={selectedTabIndex} 
              onChange={handleChange} 
              orientation="horizontal"
              aria-label="navigation tabs">

                <Tab label="1" sx={tabStyle}/>
                <Tab label="2" sx={tabStyle}/>
                <Tab label="3" sx={tabStyle}/>
                <Tab label="4" sx={tabStyle}/>

            </Tabs> : 
              
            <Tabs 
              sx={{ height: '50vh', width: '60px', flexDirection: 'column', ...tabsContainerStyle }} 
              value={selectedTabIndex} 
              onChange={handleChange} 
              orientation="vertical"
              aria-label="navigation tabs">

                <Tab label="1" sx={tabStyle}/>
                <Tab label="2" sx={tabStyle}/>
                <Tab label="3" sx={tabStyle}/>
                <Tab label="4" sx={tabStyle}/>

            </Tabs>
            }

          </Toolbar>
    
        </>
)};
