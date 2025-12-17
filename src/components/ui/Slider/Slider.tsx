import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import TestimoniCard from "../TestimoniCard";

import "./Slider.css";
import type { Testimoni } from "../../../types";

interface SliderProps {
  items: Testimoni[];
}

const Slider: React.FC<SliderProps> =({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        initialSlide={1}
        className="slider-swiper"
        centeredSlides
        slidesPerView="auto"
        spaceBetween={28}
        grabCursor
        slideToClickedSlide
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 140,
          modifier: 1.2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { spaceBetween: 18 },
          1024: { spaceBetween: 28 },
        }}
      >
        {items.map((t, i) => (
          <SwiperSlide key={t.id ?? i} className="testi-slider">
            <TestimoniCard item={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
