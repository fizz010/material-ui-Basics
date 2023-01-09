import { Box, Button,  TextField, Typography } from '@mui/material'
// import { borderRadius } from '@mui/system'
import React from 'react'
import ui1 from './images/ui1.jpg'
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";

function AppLogin() {
  return (
    <>
    <div className="conatiner" >
    <div>
      <Box  display="flex"
            flexDirection={"column"}
            // maxWidth={600}
            // maxHeight={1000}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={10}
            // padding={30}
            
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{height:'800px',
            width:'500px',backgroundImage:`url(${ui1})`}}>
<Typography sx={{color:'#124116',
marginTop:'10px'}} variant='h5'><b> WELCOME TO ZKTECO</b></Typography>
        <Box display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={10}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{height:'550px',
            width:'400px',backgroundColor:'black'}}>
                <Typography variant='h4' sx={{color:'white',marginBottom:'40px'}}>Employee Login</Typography>
<TextField type='email' placeholder='Email Address' sx={{backgroundColor:'white',
borderRadius:'5px',
width:'300px'}}/>

<TextField type='password' placeholder='Password' sx={{backgroundColor:'white',
borderRadius:'5px',
width:'300px',marginTop:'4px'}}/>

{/* <FormControlLabel sx={{color:'black',
backgroundColor:'white'}}
control={<Checkbox name="checkedB"  />}
label="forgot password"
/> */}
{/* <Button variant='outlined' color='warning' sx={{height:'20px',marginTop:'2px'}} >hi</Button> */}

<Button variant="contained"
              color="warning" sx={{height:'35px',marginTop:'25px',width:'180px'}}>SIGN UP</Button>

<Typography sx={{ color: "white",marginTop:'140px' }}>
          Copyright 2023
        </Typography>
        <CopyrightSharpIcon sx={{ color: "white",
    marginBottom:'0px' }} />
        </Box>

      </Box>
    </div>
    </div>
    </>
  )
}

export default AppLogin
