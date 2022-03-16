import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export default function GachaBar(props){
    const handleClick = (e) => {
        e.preventDefault()

    }
    return (
        <Box sx={{ flexGrow: 1 }} id="footer">
          <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 25 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Gacha Mechanic goes here
              </Typography>
            </Toolbar>  
          </AppBar>
        </Box>
              );
}








