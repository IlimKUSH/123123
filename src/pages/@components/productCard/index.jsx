import React from 'react'
import {Link} from "react-router-dom";
import { ProductExample } from 'assets'
import { CartIconBtn } from 'assets'
import CustomCounter from "../customCounter";
import './productCard.scss'

const ProductCard = ({ active, border = false, oldPrice = false, promo= false, promoGreen = true }) => {

    return (
        <div
            className="productCard"
            style={{ border: border ? '1px solid rgba(0, 0, 0, 0.1)' : '' }}
        >
            <Link to="/catalog/1" className="productCard-img__wrap">
                <img
                    className="productCard-img"
                    src={ProductExample}
                    alt="Фото продукта"
                />
            {
                promo && <p className="productCard-promo" style={{background: promoGreen ? '#74BE84' : 'red'}}>{promo}</p>
            }
            </Link>
            <div className="productCard-top">
                {active ? (
                    <span
                        className="productCard-status"
                        style={{ color: '#74BE84' }}
                    >
                        В наличии
                    </span>
                ) : (
                    <span
                        className="productCard-status"
                        style={{ color: 'red' }}
                    >
                        Нет в наличии
                    </span>
                )}
                <Link to="/catalog/1" className="productCard-name">
                    Lorem ipsum dolor sit amet consectetur. ipsum d sit
                    ametdsadadsas
                </Link>
            </div>
            <h4 className={`productCard-price ${oldPrice && 'productCard-price--red'}`}>24090 c {oldPrice && <span className="productCard-price-old">{oldPrice}с</span>}</h4>
            <div className="productCard-bottom">
                <CustomCounter/>
                <button className="productCard-btn btn-transitioned-animated">
                    в корзину
                    <CartIconBtn />
                </button>
            </div>
        </div>
    )
}

export default ProductCard
