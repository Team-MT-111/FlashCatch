import Link from 'react-router-dom' 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuListComposition from './menu';




export default function NavBar(props){
    const handleClick = (e) => {
        e.preventDefault()

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pokemon Training Card Game / HM05 Cards / Gacha Catch'em All! 
              </Typography>
            
          <MenuListComposition/>
            </Toolbar>
          </AppBar>
        </Box>
      );
}



