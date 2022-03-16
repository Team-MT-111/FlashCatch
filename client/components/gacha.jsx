import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TransitionsModal from './newPokemonModal';

const mapStateToProps = state => {
  pokedollars: state.pokedollars
}



export default function GachaBar(props){
  

    const handleClick = (e) => {
        e.preventDefault()

    }
    return (
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="fixed" sx={{ top: 'auto', bottom: 25 }} >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Get a new Pokemon with 5 PokeBucks!
              </Typography>
              
            <TransitionsModal />
              <AttachMoneyIcon/>
              <p>15</p>
              {/* <p>{pokedollars}</p> */}
            </Toolbar>  
          </AppBar>
        </Box>
              );
}








