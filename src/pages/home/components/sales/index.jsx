import React from 'react'
import TitleSection from '../../../@components/titleSection'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import {SwiperBtnNext, SwiperBtnPrev} from 'assets'
import {promos} from "assets/images/promos";
import './sales.scss'

SwiperCore.use([Navigation])
const Sales = () => {
    return (
        <div className="section-slider section-slider-sales">
            <div className="container">
                <TitleSection>Акции</TitleSection>
                <div className="section-slider--mobile__nav">
                    <SwiperBtnPrev className={`section-slider__btn section-slider__btn--prev`}/>
                    <SwiperBtnNext className={`section-slider__btn section-slider__btn--next`}/>
                </div>
            </div>
            <div className="section-slider__wrapper">
                <SwiperBtnPrev className={`section-slider__btn section-slider__btn--prev`}/>
                <div className="section-slider__swiper">
                    <Swiper
                        navigation={{
                            nextEl: '.section-slider-sales .section-slider__btn--next',
                            prevEl: '.section-slider-sales .section-slider__btn--prev',
                        }}
                        breakpoints={{
                            240: { slidesPerView: 1, spaceBetween: 8 },
                            360: { slidesPerView: 1.4, spaceBetween: 8 },
                            420: { slidesPerView: 1.6, spaceBetween: 8 },
                            600: { slidesPerView: 3, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                            1200: { slidesPerView: 5, spaceBetween: 24 },
                        }}
                        grabCursor={true}
                    >
                        {
                            promos.map((el, ind) => (
                                <SwiperSlide key={ind}>
                                    <img
                                        className="sales__slider-img"
                                        src={el}
                                        alt="Фото"
                                    />
                                </SwiperSlide>
                            ))
                        }
                        {
                            promos.map((el, ind) => {
                                if (ind < 4) {
                                    return (
                                        <SwiperSlide key={ind}>
                                            <img
                                                className="sales__slider-img"
                                                src={el}
                                                alt="Фото"
                                            />
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }
                    </Swiper>
                </div>
                <SwiperBtnNext className={`section-slider__btn section-slider__btn--next`}/>
            </div>
        </div>
    )
}

export default Sales
