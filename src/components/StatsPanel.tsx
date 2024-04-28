import React, { useState, useEffect } from 'react';
import { Grid, AppBar, Toolbar, Typography, Paper, Drawer, IconButton, List, Card,
  ListItem, ListItemIcon, ListItemText, ListItemButton, Box } from '@mui/material';


  interface Props {
    isMobile: boolean;
    labelText: string;
}


export default function StatsPanel({isMobile, labelText}: Props) {

  const statsPanelStyle = {
    //backgroundColor: 'lightsalmon',
    border: '2px solid red',
    flex: '1',
    height: isMobile ? '40%' : '45vh',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }

  const statsPanelHeaderStyle = {
    //backgroundColor: 'lightseagreen',
    border: '2px solid red',
    display: 'flex',
    height: '40px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 15px'
  }

  const cardStyle = {
    //backgroundColor: 'olive',
    width: '95%',
    borderRadius: '20px',
    flex: 1,
    margin: '10px',

  }

    return(
        <>
          <Box sx={statsPanelHeaderStyle}>
              <Typography variant="h6" component="div">
                {labelText}
              </Typography>
          </Box>

          <Box sx={statsPanelStyle}>

            <Card sx={cardStyle}></Card>
            <Card sx={cardStyle}></Card>
            <Card sx={cardStyle}></Card>


        </Box>
        </>

)}
