import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade } from "swiper";

const Slider = () => {
  const dataSlider = [
    {
      title: 'every moment its unique',
      descr: 'Tenha novas experiências em diferentes lugares',
      imageUrl: 'https://images.unsplash.com/photo-1593958812614-2db6a598c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzY298ZW58MHx8MHx8&w=1000&q=80'

    },
    {
      title: 'every moment its unique',
      descr: 'Tenha novas experiências em diferentes lugares',
      imageUrl: 'https://images.unsplash.com/photo-1466812088935-5031240e09b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80'
    },
    {
      title: 'every moment its unique',
      descr: 'Tenha novas experiências em diferentes lugares',
      imageUrl: 'https://previews.123rf.com/images/pressmaster/pressmaster1510/pressmaster151000311/46621717-danse-amis-b%C3%A9n%C3%A9ficiant-parti-dans-le-club-de-nuit.jpg'
    }
  ]

  return (
    <div className="slider">

      <Swiper
        effect={"fade"}
        slidesPerView={1}
        direction={"vertical"}
        modules={[Pagination, EffectFade]}
        pagination={{
          clickable: true,
        }}
      >

        {
          dataSlider.map((item, i) =>
            <SwiperSlide key={i} className="slider__slide" style={{ background: `url(${item.imageUrl})` }}>
              <div className="slider__container">
                <div className="slider__content">
                  <h2 className="slider__title">{item.title}</h2>
                  <p className="slider__text">{item.descr}</p>
                </div>
              </div>



            </SwiperSlide>
          )
        }

      </Swiper>
    </div>

  )
}

export default Slider