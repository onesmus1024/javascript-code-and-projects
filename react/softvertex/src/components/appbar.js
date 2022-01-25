import { AppBar, Badge, Button, IconButton, Toolbar, Typography,Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { NavLink } from 'react-router-dom';
import {useState } from 'react'

function Appbar() {
    const [mailnotification, setmailnotification] = useState(0)
    const [counter, setcounter] = useState(0)
    const newmail = ()=>{
        setmailnotification(mailnotification+1 )
    }
    const handleclick = () => {
        setcounter(counter+1)
    }
    return (
        <div>
            <AppBar color='inherit' sx={{ display: 'flex' }} position='static'>
                <Toolbar>
                    <Box display={'flex'} flexGrow={1} >
                        <Typography paddingRight={2}>
                            SOFTVERTEX
                        </Typography>
                        <Box color={'black'} >
                            <Typography >
                                <Link to='/blog' component={NavLink}>
                                    Blog
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={newmail}>
                        <Badge badgeContent={mailnotification} color='secondary'>
                            <MailIcon color='secondary' />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={handleclick}>
                        <Badge badgeContent={counter} color='secondary'>
                            <NotificationsNoneIcon color='secondary'/>
                        </Badge>
                    </IconButton>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Appbar

