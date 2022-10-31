import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import { validateEmail } from '../../../utils/utils';
import { useSnackbar } from 'notistack'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SubInteraction() {
  const [email, setEmail] = useState("");
  
  const [isShown, setIsShown] = useState(false);

  const { enqueueSnackbar } = useSnackbar();



  const handleClick = event => {
    setIsShown(!isShown);
    //console.log(isShown)
  };
  
  
  const subscribeClick = (evt) => {

    if(validateEmail(email)){
      setIsShown(false)
      enqueueSnackbar('Subscribed successfully', { variant: 'success' });
    }
    else{
      enqueueSnackbar('Wrong email format!', { variant: 'error' });
    }
  }
  console.log(isShown);
  return (
    <div className='subscription_container'>
      <IconButton sx={{
        size: '300%',
        position: 'fixed',
        bottom: '5%',
        left: '5%',
        background: '#e3715f',
        color: '#222222'
      }} variant="outlined" onClick={handleClick}>
        <EmailIcon />
      </IconButton>
      <Backdrop
  sx={{ color: '#fff', zIndex: 1101 }}
  open={isShown}
> 
<div className="sub-main">
      <div className="sub-text">
        <h2>Great! Ain't it?</h2>
        <p>Subscribe to our newsletter to keep up with our new features</p>
      </div>
      <div className="sub-form">
        <div className="field">
        <TextField sx={{width: "100%"}} id="outlined-basic" label="Your email" variant="outlined" onInput={e => {setEmail(e.target.value)}}/>

        </div>
        <div className="field">
        <Button sx={{width: "100%"}} variant="contained" onClick={subscribeClick}>Subscribe</Button>

        </div>
      </div>
    </div>
    <IconButton sx={{
  size: '500%',
  position: 'fixed',
  top: '5%',
  right: '5%',
  color: '#e3715f'

}} onClick={handleClick}>
  <CloseIcon/>
</IconButton>
</Backdrop>      

    </div>
    
  );
}

