import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";



import React from 'react'


const App_bar = () => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant='h5'>
                        YVONNE'S KITCHEN
                    </Typography>
                    <Search >
                        <SearchIcon></SearchIcon>
                    </Search>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default App_bar;