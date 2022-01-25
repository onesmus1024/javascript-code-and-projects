import React from 'react';
import { Grid } from '@mui/material';
import App_bar from './components/App_bar';
import Mycard from './components/MyCard';
import { Box } from '@mui/system';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import TaskView from './pages/TasView';

const App = () => {
  return (
    <div>
      <Grid container>
        <Grid item container>
          <App_bar></App_bar>
          <SignupForm></SignupForm>
        </Grid>
        <Box p={{lg:5}} >
          <Grid item container spacing={2} >
            <Grid item xs='12' lg='6'>
                <Mycard/>
              </Grid>
              <Grid item xs='12' lg='6'>
                <Mycard/>
              </Grid>
              <Grid item xs='12' lg='6'>
                <Mycard/>
              </Grid>
              <Grid item xs='12' lg='6'>
                <Mycard/>
              </Grid>
            </Grid>
        </Box>
      </Grid>
      <TaskView></TaskView>
    <Footer></Footer>
    </div>
  )
}

export default App;
