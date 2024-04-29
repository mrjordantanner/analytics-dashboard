import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import VerticalMenu from './VerticalMenu';

interface Props {
    isMobile: boolean;
    labelText: string;
}

export default function HeaderWithMenu({isMobile, labelText}: Props) {

  const statsPanelHeaderStyle = {
    //backgroundColor: 'lightseagreen',
    //border: '2px solid blue',
    width: '100%',
    display: 'flex',
    margin: '0px 15px',
    padding: '0px 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  return(
        <>
          <Box sx={statsPanelHeaderStyle}>
            <Typography variant="h6" component="div">
              {labelText}
            </Typography>
            <VerticalMenu />
          </Box>
        </>

)}