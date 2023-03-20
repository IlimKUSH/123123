import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import TitleSection from 'pages/@components/titleSection'
import NewsCard from 'pages/@components/newsCard'
import {SwiperBtnNext, SwiperBtnPrev} from "assets";
import './newsSlider.scss'

SwiperCore.use([Navigation])

const News = () => {
    return (
        <div className="section-slider section-slider-news">
            <div className="container">
                <div className="section-slider-news__wrap">
                    <TitleSection redLine={false}>
                        Новости компании
                    </TitleSection>
                    <div className="section-slider--mobile__nav">
                        <SwiperBtnPrev className={`section-slider__btn section-slider__btn--prev`}/>
                        <SwiperBtnNext className={`section-slider__btn section-slider__btn--next`}/>
                    </div>
                    <div className="section-slider__wrapper">
                        <SwiperBtnPrev className={`section-slider__btn section-slider__btn--prev`}/>
                        <div className="section-slider__swiper">
                            <Swiper
                                navigation={{
                                    nextEl: '.section-slider-news .section-slider__btn--next',
                                    prevEl: '.section-slider-news .section-slider__btn--prev',
                                }}
                                breakpoints={{
                                    240: { slidesPerView: 1, spaceBetween: 8 },
                                    360: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 8,
                                    },
                                    420: {
                                        slidesPerView: 1.6,
                                        spaceBetween: 8,
                                    },
                                    600: { slidesPerView: 3, spaceBetween: 24 },
                                }}
                                grabCursor={true}
                            >
                                {[...Array(11)].map((x, i) => (
                                    <SwiperSlide key={i}>
                                        <NewsCard />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <SwiperBtnNext className={`section-slider__btn section-slider__btn--next`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
