import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { connect } from 'react-redux'
import { fetchAddPokemon } from '../reducers/userReducer';

const mapStateToProps = (state) => ({
  user: state.user.pokemons[state.user.pokemons.length - 1],
  isLogged: state.user.isAuthenticated,
  money: state.user.pokedollars,
  array: state.user.pokemons
})

const mapDispatchToProps = dispatch => ({
  // verifyUser: (loginInfo, navigate) => {
  //     const thunkFunc = fetchUserLogin(loginInfo, navigate);
  //     dispatch(thunkFunc);
  // }

  gachaMechanic: (data) => {
    const thunkFunc = fetchAddPokemon(data)
    console.log('thunkfunc', thunkFunc)
    dispatch(thunkFunc)
  }

});


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TransitionsModal(props) {
  let data = {
   image: 'hehe',
   pokemon: 'MewTwo',
  }
  console.log('props', props);
  console.log('props.user', props.user)
  if (props.isLogged) {
    data.image = props?.user?.picture 
    data.pokemon = props?.user?.name
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick(e){
    e.preventDefault();
    if(props.money < 5) return;
    props.gachaMechanic({
      pokedollars: props.money,
      pokemons: props.array
    })
    handleOpen()
  }


  return (
    <div>
      <IconButton color='inherit' onClick={handleClick}>
        <CatchingPokemonIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Wow! You got a {data.pokemon}!
            </Typography>           
            <img className='pokemon' src={data.image} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal);
