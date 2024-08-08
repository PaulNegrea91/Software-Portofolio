import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Slide from './slide';
import { Autoplay, Virtual } from 'swiper/modules';
import 'swiper/css';


const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Swiper
    modules={[Autoplay, Virtual]}
      spaceBetween={50}
      
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      autoplay={{ clickable: true }}
    >
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <Slide product={product} />
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Carousel;