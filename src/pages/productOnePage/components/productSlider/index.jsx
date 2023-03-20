import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import './productSlider.scss'

const ProductSlider = ({images}) => {
    const [activeThumb, setActiveThumb] = useState()
    return (
        <div className="product-slider">
            <div className="product-slider__thumbs">
                <Swiper
                    onSwiper={setActiveThumb}
                    spaceBetween={8}
                    slidesPerView={4}
                    modules={[Navigation, Thumbs]}
                    navigation={true}
                    breakpoints={{
                        560: { slidesPerView: 5},
                    }}
                    direction="vertical"
                    className='product-images-slider-thumbs'
                >
                    {
                        images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="product-slider__thumbs-wrapper">
                                    <img src={item} alt="product images" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="product-slider__main">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    thumbs={{ swiper: activeThumb }}
                    className='product-images-slider'
                >
                    {
                        images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="product images" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default ProductSlider;