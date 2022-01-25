import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Home_img from '../images/Team work_Monochromatic.png'


function Home() {
    return (
        <React.Fragment>
            <Box>
                <Grid container sx={{my:'10'}}>
                    <Grid item xs={12} md={6} padding={12}>
                        <Box>
                            <Typography variant='h4'>
                                learn with us during this era of Big data
                                gain required skills needed for Data science and machine learning<br></br> 
                                <Button variant='contained'>
                                    join us 
                                </Button>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={Home_img} alt='build a company'></img>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Home
