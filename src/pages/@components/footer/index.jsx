import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
    PhoneIcon,
    PhoneIconMobile,
    SocialsFaceBookIcon,
    SocialsInstagramIcon,
    SocialsWhatsAppIcon,
    Logo,
    MooreLogo,
} from 'assets'

import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Link className="footer-title" to="/">Kanzler&Bürger</Link>
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="footer-column">
                                <h6 className="footer-column__title">Меню</h6>
                                <NavLink
                                    to="/catalog"
                                    className="footer-column__link"
                                >
                                    Каталог
                                </NavLink>
                                <NavLink
                                    to="promo"
                                    className="footer-column__link"
                                >
                                    Акции
                                </NavLink>
                                <NavLink
                                    to="popular"
                                    className="footer-column__link"
                                >
                                    Популярные товары
                                </NavLink>
                                <NavLink
                                    to="new"
                                    className="footer-column__link"
                                >
                                    Новинки
                                </NavLink>
                                <NavLink
                                    to="/news"
                                    className="footer-column__link"
                                >
                                    Новости
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="footer-column__link"
                                >
                                    О компании
                                </NavLink>
                                <NavLink
                                    to="contacts"
                                    className="footer-column__link"
                                >
                                    Контакты
                                </NavLink>
                                <Link className="footer-logo" to="/">
                                    <img src={Logo} alt="Логотип" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="footer-column">
                                <h6 className="footer-column__title">
                                    Категории
                                </h6>
                                <Link
                                    to="/catalog/paper"
                                    className="footer-column__link"
                                >
                                    Бумага
                                </Link>
                                <Link
                                    to="/catalog/graphics"
                                    className="footer-column__link"
                                >
                                    Письмо и графика
                                </Link>
                                <Link
                                    to="catalog/office-supplies"
                                    className="footer-column__link"
                                >
                                    Канц товары
                                </Link>
                                <Link
                                    to="catalog/art-supplies"
                                    className="footer-column__link"
                                >
                                    Художественные товары
                                </Link>
                                <Link
                                    to="catalog/arts"
                                    className="footer-column__link"
                                >
                                    Творчество
                                </Link>
                                <Link
                                    to="catalog/poly-materials"
                                    className="footer-column__link"
                                >
                                    Полиграфические материалы
                                </Link>
                                <Link
                                    to="catalog/sales"
                                    className="footer-column__link"
                                >
                                    Распродажи
                                </Link>
                                <Link
                                    to="catalog/office-technic"
                                    className="footer-column__link"
                                >
                                    Офисное оборудование
                                </Link>
                                <Link
                                    to="catalog/games-and-toys"
                                    className="footer-column__link"
                                >
                                    Игры и игрушки
                                </Link>
                                <Link
                                    to="catalog/souvenirs"
                                    className="footer-column__link"
                                >
                                    Сувенирная продукция
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="footer-column footer-column--contacts">
                                <h6 className="footer-column__title">
                                    Контакты
                                </h6>
                                <p className="footer-column__subtitle">
                                    Огонбаева, 222
                                </p>
                                <a
                                    href="tel:+996777902233"
                                    className="footer-column__link"
                                >
                                    <PhoneIcon />
                                    0777 90 22 33
                                </a>
                                <a
                                    href="tel:+996312902233"
                                    className="footer-column__link"
                                >
                                    <PhoneIconMobile />
                                    0312 90 22 33
                                </a>
                                <p className="footer-column__subtitle">
                                    Эркиндик, 7
                                </p>
                                <a
                                    href="tel:+996777902234"
                                    className="footer-column__link"
                                >
                                    <PhoneIcon />
                                    0777 90 22 34
                                </a>
                                <a
                                    href="tel:+996312902234"
                                    className="footer-column__link"
                                >
                                    <PhoneIconMobile />
                                    0312 90 22 34
                                </a>
                                <p className="footer-column__subtitle">
                                    Уметалиева, 84
                                </p>
                                <a
                                    href="tel:+996777902236"
                                    className="footer-column__link"
                                >
                                    <PhoneIcon />
                                    0777 90 22 36
                                </a>
                                <a
                                    href="tel:+996312902236"
                                    className="footer-column__link"
                                >
                                    <PhoneIconMobile />
                                    0312 90 22 36
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="footer-column footer-column--socials">
                                <div>
                                    <h6 className="footer-column__title">
                                        Мы в соц сетях
                                    </h6>
                                    <a
                                        href="https://instagram.com/Kanzler"
                                        target="_blank"
                                        className="footer-column__link"
                                    >
                                        <SocialsInstagramIcon />
                                        Instagram
                                    </a>
                                    <a
                                        href="https://facebook.com/Kanzler"
                                        target="_blank"
                                        className="footer-column__link"
                                    >
                                        <SocialsFaceBookIcon />
                                        Facebook
                                    </a>
                                    <a
                                        href="https://whatsapp.com/Kanzler"
                                        target="_blank"
                                        className="footer-column__link"
                                    >
                                        <SocialsWhatsAppIcon />
                                        What’s App
                                    </a>
                                </div>
                                <a
                                    href="https://to-moore.com/"
                                    target="_blank"
                                    className="moore-logo"
                                >
                                    <img src={MooreLogo} alt="Moore Studio" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Kanzler & Burger (c) 2017. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
