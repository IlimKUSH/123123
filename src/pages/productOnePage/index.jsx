import React from 'react';
import {Link} from "react-router-dom";
import Breadcrumbs from "../@components/breadcrumbs";
import {ArrowIconPrev, CartIcon} from "assets";
import ProductSlider from "./components/productSlider";
import './productOnePage.scss'
import { productImages } from 'assets/images/productExamples'
import ProductCardSlider from "../@components/productCardSlider";
import CustomCounter from "../@components/customCounter";

const ProductOnePage = () => {
    return (
        <div className="productPage">
            <div className="container">
                <Breadcrumbs/>
                <div className="productPage__wrap">
                    <div className="productPage__slider">
                        <ProductSlider images={productImages}/>
                    </div>
                    <div className="productPage__content">
                        <div className="d-inline-block">
                            <Link to="/catalog" className="productPage__link-back">
                                <ArrowIconPrev/>
                                Назад
                            </Link>
                        </div>
                        <h1 className="productPage-title">e-motion Pure Black fountain pen, M, black</h1>
                        <h6 className="productPage-subtitle">Описание</h6>
                        <p className="productPage-text">Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec eget molestie ornare lorem mattis.</p>
                        <CustomCounter/>
                        <div className="productPage__content-bottom">
                            <p className="productPage-price">245с</p>
                            <p className="productPage-available">В наличии</p>
                        </div>
                        <button type="button" className="productPage-btn-cart">в корзину <CartIcon/></button>
                    </div>
                </div>
                <div className="productPage__desc">
                    <p className="productPage__desc-head">Характеристики</p>
                    <div className="productPage__desc-list">
                        <div className="productPage__desc-list__item">
                            <p>Бренд</p>
                            <span>Бренд</span>
                        </div>
                        <div className="productPage__desc-list__item">
                            <p>Страна происхождения</p>
                            <span>Германия</span>
                        </div>
                        <div className="productPage__desc-list__item">
                            <p>Назначение</p>
                            <span>для декорирования</span>
                        </div>
                        <div className="productPage__desc-list__item">
                            <p>Техника</p>
                            <span>Акрил</span>
                        </div>
                        <div className="productPage__desc-list__item">
                            <p>Тип товара</p>
                            <span>Маркер</span>
                        </div>
                        <div className="productPage__desc-list__item">
                            <p>Размер, мм</p>
                            <span>1.2</span>
                        </div>
                    </div>
                </div>
            </div>
            <ProductCardSlider title={"Вам может быть интересно"} customClass={"section-slider-product-page"} cardBorder={true}/>
        </div>
    );
};

export default ProductOnePage;