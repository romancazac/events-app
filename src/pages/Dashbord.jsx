import React from 'react'
import { Grid } from '@mui/material'
import Header from '../components/header/Header'
import SearchDash from '../components/search/SearchDash'
import Logo from '../components/Logo'
import TopPanel from '../components/topPanel/TopPanel'
import Cart from '../components/cart/Cart'
const Dashbord = () => {
  const dataCarts = [
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYWlkgcPlYb1D8bH5SMMjevsc79zt0KYLxmlbiMcJ8t_u5N3vPU4O7vRPUFMpSKxcrUA&usqp=CAU',
      title: 'Shiksha Event Management Courses',
      descr:'Day Of Love Festival 2020 Siap Digelar! Mari merayakan cinta sambil bernostalgia dengan menyanyikan tembang cinta 2000an, konser ini berisikan line up Band yang memiliki hits di tahun 2000an',
      data:'18 December 2022',
      hora:'21:30',
      adress:'Molodva, Chisinau'
    },
    {
      id: 2,
      img: 'https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg',
      title:'BIG EVENT ASIA – Event Organizer & Promoter',
      descr:'Day Of Love Festival 2020 Siap Digelar! Mari merayakan cinta sambil bernostalgia dengan menyanyikan tembang cinta 2000an, konser ini berisikan line up Band yang memiliki hits di tahun 2000an',
      data:'6 November 2022',
      hora:'21:30',
      adress:'Molodva, Chisinau'
      
    },
    {
      id: 3,
      img: 'https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg',
      title:'BIG EVENT ASIA – Event Organizer & Promoter',
      descr:'Day Of Love Festival 2020 Siap Digelar! Mari merayakan cinta sambil bernostalgia dengan menyanyikan tembang cinta 2000an, konser ini berisikan line up Band yang memiliki hits di tahun 2000an',
      data:'6 November 2022',
      hora:'21:30',
      adress:'Molodva, Chisinau'
      
    },
    {
      id: 4,
      img: 'https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg',
      title:'BIG EVENT ASIA – Event Organizer & Promoter',
      descr:'Day Of Love Festival 2020 Siap Digelar! Mari merayakan cinta sambil bernostalgia dengan menyanyikan tembang cinta 2000an, konser ini berisikan line up Band yang memiliki hits di tahun 2000an',
      data:'6 November 2022',
      hora:'21:30',
      adress:'Molodva, Chisinau'
      
    },
    {
      id: 5,
      img: 'https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg',
      title:'BIG EVENT ASIA – Event Organizer & Promoter',
      descr:'Day Of Love Festival 2020 Siap Digelar! Mari merayakan cinta sambil bernostalgia dengan menyanyikan tembang cinta 2000an, konser ini berisikan line up Band yang memiliki hits di tahun 2000an',
      data:'6 November 2022',
      hora:'21:30',
      adress:'Molodva, Chisinau'
      
    }
  ]
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
        Chat
      </Grid>

    </Grid>
  )
}

export default Dashbord