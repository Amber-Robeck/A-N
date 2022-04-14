// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// const Carousel = () => {
//     return ( <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//       </Swiper> );
// }
 
// export default Carousel;


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        rewind={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-one"><span className="carousel-text">
          <b>35% off</b>
          <br></br>
          relaxing comfort
          <br></br>
          from sunrise to sunset
          </span></SwiperSlide>
        <SwiperSlide className="slide-two"><span className="carousel-text">
        <b>denim</b>
        <br></br>
        cool and stylish
        <br></br>
        shop for spring
        </span></SwiperSlide>
        
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}/assets/images/xuan-thu-le-2OXNxfTt3kQ-unsplash.jpg`} alt="Man and woman with stylish outfits"/></SwiperSlide>
      </Swiper>
    </>
  );
}