import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
function Home() {
    return (
        <React.Fragment>
            <Container maxWidth='xl' disableGutters>
                <Box>
                    <Grid container>
                        <Grid item xs='12' md='12' lg='6' textAlign='center' alignContent='center'>
                            <Box>
                            <img alt='ones home page' src='https://media.istockphoto.com/photos/flying-tablet-laptop-and-mobile-phone-showing-online-shop-website-picture-id1157329704?b=1&k=20&m=1157329704&s=170667a&w=0&h=2PnN0AQec_Cr7iedvQAar7NvysRwy73DkVkudib2Zsg=' width={'100%'} />
                            </Box>
                        </Grid>
                        <Grid item xs='12' md='12' lg='6' >
                            <Box sx={{bgcolor:'grey'}} height='100%'>
                            <Typography>
                                <Box fontWeight='bold'>Welcome To SoftVertex</Box>
                            </Typography>
                            <Typography>
                                Get yourself any software you need! <br />
                                we build software for your business for free, <br /> get your business up and running sounds cool,Huh?
                                <Badge badgeContent={10} color='secondary' max={5}>
              <MailIcon/>
            </Badge>
                            </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs='12' md='12' lg='6' >
                        <Box sx={{bgcolor:'grey'}} height='100%'>
                            <Typography>
                                <Box fontWeight='bold'>Learn to code with us</Box>
                            </Typography>
                            <Typography alignItems='center'>
                                Get skill needed for modern technology that will enble you to push your business to required standards
                            </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs='12' md='12' lg='6' >
                            <Box sx={{bgcolor:'blue'}}>
                                <img alt='ones home page' src={require('../images/Coding _Monochromatic.png')} width={'50%'} />
                            </Box>
                            
                        </Grid>
                       
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>

    )
}

export default Home
