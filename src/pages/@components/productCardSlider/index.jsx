import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import TitleSection from 'pages/@components/titleSection'
import ProductCard from 'pages/@components/productCard'
import {SwiperBtnNext, SwiperBtnPrev} from "assets";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../slices/cartSlice";


SwiperCore.use([Navigation])
const ProductCardSlider = ({title, customClass, cardBorder = false, cardActive = true, cardOldPrice = false,productPromo = false, productPromoGreen = true }) => {
  const items = useSelector((state) => state.allCart.items)

  const dispatch = useDispatch();

  return (
        <div className={`section-slider ${customClass}`}>
            <div className="container">
                <TitleSection>{title}</TitleSection>
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
                            nextEl: `.${customClass} .section-slider__btn--next`,
                            prevEl: `.${customClass} .section-slider__btn--prev`,
                        }}
                        breakpoints={{
                            240: { slidesPerView: 1, spaceBetween: 8 },
                            360: { slidesPerView: 1.4, spaceBetween: 8 },
                            420: { slidesPerView: 1.6, spaceBetween: 8 },
                            600: { slidesPerView: 3, spaceBetween: 22 },
                            1024: { slidesPerView: 4, spaceBetween: 22 },
                            1200: { slidesPerView: 5, spaceBetween: 22 },
                        }}
                        grabCursor={true}
                    >
                        {items.map((x, i) => (
                            <SwiperSlide key={i}>
                              <img height={50} src={x.img} alt=""/>
                              <h1>{x.title}</h1>
                              <p>{x.price}</p>
                              <button onClick={() => dispatch(addToCart(x))}>Add to cart</button>
                                {/*<ProductCard active={cardActive} border={cardBorder} oldPrice={cardOldPrice} promo={productPromo} promoGreen={productPromoGreen} />*/}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <SwiperBtnNext className={`section-slider__btn section-slider__btn--next`}/>
            </div>
        </div>
    );
};

export default ProductCardSlider;