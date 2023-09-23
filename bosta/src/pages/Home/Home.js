import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import './Home.css';
import bostaImg2 from '../../images/bostaImg2.png';

const Home = () => {
  return (
    <Box className="homePage">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} sx={{ paddingTop: '30px !important' }} className='leftSide'>
          <Typography className='homeHeaderTitle'>Join A New Generation Of Logistics!</Typography>
          <Typography className='homeHeaderParagraph'>
            Redefining how you ship, track, collect, deliver all through innovative tech-solutions and efficient operations.
          </Typography>
          <button className='homeHeaderBtn'>Start Now</button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className='homeImgBox'>
          <img src={bostaImg2} alt="" className='homeImg'/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home