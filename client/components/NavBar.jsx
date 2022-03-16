import Link from 'react-router-dom' 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuListComposition from './menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const mapStateToProps = state => {
    pokedollars: state.pokedollars
}

export default function NavBar(props){
    const handleClick = (e) => {
        e.preventDefault()

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pokemon Training Card Game / Waifu Hunter Pro 
              </Typography>
            <AttachMoneyIcon/>
            {/* <p>{pokedollars}</p> */}
          <MenuListComposition/>
            </Toolbar>
          </AppBar>
        </Box>
      );
}



