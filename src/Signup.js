import React from 'react'
import { Button, Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import './index.css';

const Signup = () => {
    return (
        <div className='App'>
            <h1>Registration Page</h1>
            <form style={{ margin: "10px", backgroundImage: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg" }} >
                <Grid className='gridClass' container spacing={2}>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="First Name:" variant="outlined" /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Last Name:" variant="outlined" /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Email Id:" variant="outlined" /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Password:" variant="outlined" type='password' /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Confirm Password:" variant="outlined" type='password' /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Pan Card:" variant="outlined" /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Adhar Card:" variant="outlined" /><br />
                    </Grid>
                    <Grid item xs={6} sx={{ width: "50%" }}>
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Date of Birth:" variant="outlined" type='date' InputLabelProps={{ shrink: true }} /><br />
                    </Grid>

                    <Grid item xs={6} sx={{ width: "50%" }} >
                        <TextField required sx={{ marginBottom: "6px", width: "90%" }} id="standard-basic" label="Nationality" variant="outlined" /><br />
                    </Grid>
                    <FormControl>
                        <FormLabel sx={{ marginLeft: "-40%" }} id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <Grid sx={{ display: "flex", marginLeft: "20%" }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>


                <Button type='submit' variant="contained" sx={{ marginRight: "6px" }}>Submit</Button>
                <Button variant="contained" sx={{ marginLeft: "6px" }}>Cancel</Button>
            </form>
        </div>
    )
}

export default Signup
