import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <Box bgcolor={'gray'} px={10} paddingTop={10}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box borderBottom={2} >
                            start ups
                        </Box>
                        <Box>
                            mobile application
                        </Box>
                        <Box>
                            web application
                        </Box>
                        <Box>
                            api creation and integration
                        </Box>

                    </Grid>
                    <Grid item  xs={12} md={3}>
                        <Box borderBottom={2} >
                            online support
                        </Box>
                        <Box>
                            Email 
                        </Box>
                        <Box>
                            WhatsApp
                        </Box>
                        <Box>
                            <Button>
                                online chat
                            </Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box borderBottom={2}>
                            follow us 
                        </Box>
                        <Box>
                            instagram
                        </Box>
                        <Box>
                            twitter
                        </Box>
                        <Box>
                            telegrame
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box borderBottom={2}>
                            channell
                        </Box>
                        <Box>
                            youtube
                        </Box>
                        <Box>
                            dicord
                        </Box>
                        <Box>
                            Telegram
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}
