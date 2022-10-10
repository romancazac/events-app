import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Logo from '../components/Logo'
import Slider from '../components/slider/Slider'
import SocialIcon from '../components/social-icon/SocialIcon'
import BasicTabs from '../components/tabs/BasicTabs'

const LogIn = () => {
   return (
      <Grid className="wrapper" container>
         <Grid className="wrapper__left" item xs={9}>
            
               <Header className="header header_log">
                  <Logo />
               </Header>

               <Slider />
               <Footer />
          

         </Grid>
         <Grid className="wrapper__right" item xs={3}>
            <SocialIcon />
            <BasicTabs />
         </Grid>

      </Grid>
   )
}

export default LogIn