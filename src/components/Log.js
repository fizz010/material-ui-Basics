import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";
// import { OutlinedInput } from '@mui/material';

function Log() {
  return (
    <div style={{backgroundColor:'purple'}}>
        <br /> <br /> <br /> <br /><br />
      <Typography variant='h4' color={'aqua'} >
            WELCOME
      </Typography>
<br /><br />
      <Typography color={'white'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus itaque deleniti, sequi amet, optio ipsum maiores <br />
             beatae modi neque iusto iste veniam quos rem dignissimos reprehenderit exercitationem aliquid eligendi blanditiis.
      </Typography>
      <br /><br />
      <TextField type='email' placeholder='Email Address' sx={{
borderRadius:'5px',
width:'300px',marginTop:'40px'}}/> <br /> <br /> <br />

<TextField type='password' placeholder='password' sx={{
borderRadius:'5px',
width:'300px',borderColor:'white'}}/>
<br />
<Button variant="contained"
              color="info" sx={{height:'35px',marginTop:'25px',width:'120px',}}>SIGN UP</Button>
<br /><br /><br /><br /><br />
<Typography sx={{ color: "white" }}>
          Copyright 2023
        </Typography>
        <CopyrightSharpIcon sx={{ color: "white"
     }} />
     <Typography>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
     </Typography>
    </div>
  )
}

export default Log
