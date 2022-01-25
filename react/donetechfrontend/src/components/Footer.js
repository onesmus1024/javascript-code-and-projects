import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
const Footer = () => {
    return (
        <footer >
            <Box px={{lg:5}} bgcolor="gray" color='white' position={'absolute'} left={'0%'} right={'0%'}  borderTop={1} >
                <Container maxWidth='xl'>
                    <Grid container spacing={2} >
                        <Grid item xs='12'  lg='4'>
                            <Box borderBottom={1} color='black'> 
                                help
                            </Box>
                            <Box>
                                ones
                            </Box>
                            <Box>
                                ones
                            </Box>
                        </Grid>
                        <Grid item xs='12' lg='4'>
                            <Box borderBottom={1} color='black'>
                                support
                            </Box>
                            <Box>
                                email
                            </Box>
                            <Box>
                                online support
                            </Box>
                        </Grid>
                        <Grid item xs='12' lg='4'>
                            <Box borderBottom={1} color='black'>
                                follow us on social media
                            </Box>
                            <Box>
                                facebook
                            </Box>
                            <Box>
                                twitter
                            </Box>
                        </Grid>
                    </Grid>
                    <Box p={{lg:5}} textAlign='center'>SoftVertex &copy; 2021 </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;