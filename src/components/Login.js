import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import CopyrightSharpIcon from '@material-ui/icons/CopyrightSharp';
import CopyrightSharpIcon from "@mui/icons-material/CopyrightSharp";

function Login() {
  return (
    <div>
      <Box
        marginTop={0}
        marginBottom={0}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        padding={3}
      >
        {/* <h1>WELCOME</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui iusto cum cupiditate.
  Earum neque cupiditate blanditiis. Ipsa sit qui ut, quod ea maiores natus corporis temporibus, odit rerum a!</p>
<TextField id="standard-basic" label="Standard" variant="standard" /><br /><br />
<TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <Typography
          variant="h4"
          sx={{
            color: "white",
          }}
          style={{ marginTop: "40px" }}
        >
          Welcome
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
          style={{ marginTop: "30px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga
          ducimus beatae iste dolore repudiandae <br />
          odit labore nobis autem id, eveniet nostrum earum vero dolorem
          voluptatum? Vel et corporis cupiditate!
        </Typography>
        <form>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={600}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
              backgroundColor: "gray",
            }}
          >
            <Typography variant="h4" textAlign={"center"} padding={3}>
              Login
            </Typography>
            <TextField
              sx={{
                borderRadius: 5,
                width: "300px",
                backgroundColor: "white",
                color: "black",
              }}
              margin="normal"
              type={"email"}
              variant="outlined"
              placeholder="Email"
            />

            <TextField
              sx={{
                borderRadius: 3,
                width: "300px",
                backgroundColor: "white",
                color: "black",
              }}
              margin="normal"
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />

            <Button
              sx={{
                marginTop: 3,
                borderRadius: 3,
              }}
              variant="contained"
              color="warning"
            >
              SIGN IN
            </Button>
          </Box>
        </form>
        {/* <footer style={{marginTop:'30px'}}>&copy; Copyright 2023 </footer> */}
        <Typography sx={{ color: "white", marginTop: "315px" }}>
          Copyright 2023
        </Typography>
        <CopyrightSharpIcon sx={{ color: "white",
    marginBottom:'0px' }} />
      </Box>
    </div>
  );
}

export default Login;
