import React from 'react'
import { Grid } from '@mui/material'
import Header from '../components/header/Header'
import SearchDash from '../components/search/SearchDash'
import Logo from '../components/Logo'
import TopPanel from '../components/topPanel/TopPanel'
import Cart from '../components/cart/Cart'
import { AppContext } from '../App'
import {signOut} from "firebase/auth"
import Btn from '../components/ui/Btn'
import { auth } from '../firebase'
import CheatHeader from '../components/chatHeader/ChatHeader'
import { ChatList } from '../components/chatHeader/ChatList'
const Dashbord = () => {
  const {dataCarts, currentUser} = React.useContext(AppContext) ;
    const logOut = () =>{
      signOut(auth)

    }

  return (
    <Grid className="wrapper" container>
      <Grid className="wrapper__left wrapper__left_dash" item xs={9}>
        <div className="container_dash">
          <Header className="header header_dash">
            <Logo />
            <SearchDash />
          </Header>
          <TopPanel />
          <div className="cart__row">
            {
              dataCarts.map((cart) =>
                <Cart key={cart.id} {...cart} />
              )

            }
          </div>
        </div>

      </Grid>
      <Grid className="wrapper__right" item xs={3}>
        <CheatHeader logOut={logOut}/>
        <ChatList/>

      </Grid>

    </Grid>
  )
}

export default Dashbord