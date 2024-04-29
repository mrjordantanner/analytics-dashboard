import React from 'react';
import { Box } from '@mui/material';

interface Props {
    isMobile: boolean;
    children: React.ReactNode
}

export default function Panel({isMobile, children}: Props) {

  const statsPanelStyle = {
    //backgroundColor: 'lightsalmon',
    //border: '2px solid red',
    width: '100%',
    display: 'flex',
    gap: '30px',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return(
        <>
          <Box sx={statsPanelStyle}>
            {children}
          </Box>
        </>

)}
