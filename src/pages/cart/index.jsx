import React, {useEffect} from 'react'
import Breadcrumbs from '../@components/breadcrumbs'
import { ArrowIconBlack } from '../../assets'
import './cart.scss'
import {useDispatch, useSelector} from "react-redux";
import {decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem} from "../../slices/cartSlice";

const Cart = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <div className="container">
            <Breadcrumbs />
            <div className="order">
                <h1 className="page-title">Оформление заказа</h1>
                <form action="#" className="order-form">
                    <div className="row order-row">
                        <div className="col-xl-8">
                            <div className="accordion order-accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button block-title"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne"
                                            aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne"
                                        >
                                            Корзина (3)
                                            <span className="order-accordion-button__arrow">
                                                <ArrowIconBlack />
                                            </span>
                                        </button>
                                    </h2>
                                    {cart?.map((data) => (
                                      <div>
                                          <img height={50} src={data.img} alt=""/>
                                          <h1>{data.title}</h1>
                                          <p>{data.price}</p>
                                          <button onClick={() => dispatch(removeItem(data.id))}>remove</button>
                                          <button
                                            onClick={() =>
                                              dispatch(decreaseItemQuantity(data.id))
                                            }
                                          >
                                              minus
                                          </button>
                                          <h5>{data.quantity}</h5>
                                          <button
                                            onClick={() =>
                                              dispatch(increaseItemQuantity(data.id))
                                            }
                                          >
                                              plus
                                          </button>
                                      </div>
                                    ))}
                                    <div
                                        id="panelsStayOpen-collapseOne"
                                        className="accordion-collapse collapse show"
                                    >
                                        <div className="accordion-body">
                                            <table className="table cart-table">
                                                <thead className="cart-table__head">
                                                    <tr>
                                                        <th scope="col">
                                                            Фото
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="cart-table__padding-right"
                                                        >
                                                            Название
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="cart-table__padding-left cart-table__padding-right"
                                                        >
                                                            Артикул
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="cart-table__padding-left cart-table__padding-right"
                                                        >
                                                            Кол-во
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="cart-table__padding-left"
                                                        >
                                                            Цена
                                                        </th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="cart-table__body"
                                                    id="cartTableBody"
                                                ></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-form__block">
                                <h3 className="block-title">
                                    Оформление заказа
                                </h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="orderName"
                                                placeholder="Имя"
                                            />
                                            <label htmlFor="orderName">
                                                Имя
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="orderSurname"
                                                placeholder="Фамилия"
                                            />
                                            <label htmlFor="orderSurname">
                                                Фамилия
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-8">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="number"
                                                className="form-control"
                                                id="orderPhone"
                                                placeholder="+996"
                                            />
                                            <label htmlFor="orderPhone">
                                                Телефон
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-4">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="orderDob"
                                                placeholder="0"
                                            />
                                            <label htmlFor="orderDob">
                                                Доб.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="email"
                                                className="form-control"
                                                id="orderEmail"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="orderEmail">
                                                E-mail
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="orderPhonePlus"
                                                placeholder="+996"
                                            />
                                            <label htmlFor="orderPhonePlus">
                                                Доп телефон или whatsapp
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-form__block">
                                <h3 className="block-title">Я</h3>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="orderRadioUserType"
                                        id="orderRadioUserType1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="orderRadioUserType1"
                                    >
                                        Физическое лицо
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="orderRadioUserType"
                                        id="orderRadioUserType2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="orderRadioUserType2"
                                    >
                                        Юридическое лицо
                                    </label>
                                </div>
                            </div>
                            <div className="order-form__block">
                                <h3 className="block-title">Доставка</h3>
                                <div className="order-form__shipment-method">
                                    <h6 className="block-subtitle">
                                        Способ доставки
                                    </h6>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="orderRadioShippingType"
                                            id="orderRadioShippingType1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="orderRadioShippingType1"
                                        >
                                            Физическое лицо
                                        </label>
                                        <a href="#">
                                            режим работы магазина
                                            <svg
                                                width="5"
                                                height="8"
                                                viewBox="0 0 5 8"
                                                fill="none"
                                                stroke="#5178DC"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1 7L4 4L1 1" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="orderRadioShippingType"
                                            id="orderRadioShippingType2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="orderRadioShippingType2"
                                        >
                                            Юридическое лицо
                                        </label>
                                        <a href="#">
                                            условия доставки
                                            <svg
                                                width="5"
                                                height="8"
                                                viewBox="0 0 5 8"
                                                fill="none"
                                                stroke="#5178DC"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1 7L4 4L1 1" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <h6 className="block-subtitle">
                                    Адрес доставки
                                </h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="orderShipCountry"
                                                placeholder="Страна"
                                            />
                                            <label htmlFor="orderShipCountry">
                                                Страна
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="orderShipCity"
                                                placeholder="Фамилия"
                                            />
                                            <label htmlFor="orderShipCity">
                                                Город
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="orderShipStreet"
                                                placeholder="Улица"
                                            />
                                            <label htmlFor="orderShipStreet">
                                                Улица
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="orderShipApartment"
                                                placeholder="Квартира"
                                            />
                                            <label htmlFor="orderShipApartment">
                                                Квартира
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="orderShipHouse"
                                                placeholder="Дом"
                                            />
                                            <label htmlFor="orderShipHouse">
                                                Дом
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-form__shipment-comment">
                                    <h6 className="block-subtitle">
                                        Указать домофон, этаж, подъезд и
                                        комментарий к адресу
                                    </h6>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Комментарий"
                                            id="orderShipComment"
                                            style={{ height: 62 + 'px' }}
                                        />
                                        <label htmlFor="orderShipComment">
                                            Комментарий
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 relative">
                            <div className="cart-total">
                                <h6 className="cart-total__title">
                                    Стоимость заказа
                                </h6>
                                <div className="d-flex justify-content-between cart-total__item">
                                    <span>
                                        Товары(
                                        <span id="cartProductsQuantity">0</span>
                                        )
                                    </span>
                                    <p id="cartProductsPrice">0c</p>
                                </div>
                                <div className="d-flex justify-content-between cart-total__item">
                                    <span>Доставка</span>
                                    <p>Бесплатно</p>
                                </div>
                                <div className="cart-total__divider"></div>
                                <div className="d-flex justify-content-between cart-total__sum">
                                    <span>Итого</span>
                                    <p id="cartTotalPrice">0с</p>
                                </div>
                                <button type="submit" className="cart-btn">
                                    Подтвердить заказ
                                </button>
                                <p className="cart-total__cond">
                                    Подтверждая заказ, я принимаю условия <br />{' '}
                                    <a href="#">пользовательского соглашения</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cart
