import React from 'react'
import { Button, Grid, TextField } from '@mui/material';
import './index.css';


const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
            <form style={{ margin: "10px"}} >
                
                        <TextField required sx={{ marginBottom: "6px", width: "50%" }} id="standard-basic" label="Email Id:" variant="outlined" /><br />
                    
                    
                        <TextField required sx={{ marginBottom: "6px", width: "50%" }} id="standard-basic" label="Password:" variant="outlined" type='password' /><br />
                    
                    <Button type='submit' variant="contained" sx={{ marginRight: "6px" }}>Submit</Button>
                    
                    </form>
    </div>
  )
}

export default Login
