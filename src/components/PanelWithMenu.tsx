import React from 'react';
import { Typography, Box } from '@mui/material';
import VerticalMenu from './VerticalMenu';

interface Props {
    isMobile: boolean;
    labelText: string;
    children: React.ReactNode
}

export default function PanelWithMenu({isMobile, labelText, children}: Props) {


  const statsPanelHeaderStyle = {
    backgroundColor: 'lightseagreen',
    border: '2px solid blue',
    display: 'flex',
    margin: '15px',
    height: '40px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px'
  }

  const statsPanelStyle = {
    backgroundColor: 'lightsalmon',
    border: '2px solid red',
    height: isMobile ? '40%' : '45vh',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }


    return(
        <>
          <Box sx={statsPanelHeaderStyle}>
            <Typography variant="h6" component="div">
              {labelText}
            </Typography>
            <VerticalMenu />
          </Box>

          <Box sx={statsPanelStyle}>
            {children}
          </Box>
        </>

)}
