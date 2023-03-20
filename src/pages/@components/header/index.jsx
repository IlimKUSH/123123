import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
    Logo,
    PhoneIconRed,
    ArrowIcon,
    CartIcon,
    ProfileIcon,
    SquaresIcon,
    ZoomIcon, MailIcon,
} from 'assets'
import './header.scss'
import HeaderCatalog from "./components/headerCatalog";

const Header = () => {
    const [isBurger, setIsBurger] = useState(false)
    const toggleBurger = () => setIsBurger(!isBurger)
    const closeBurger = () => setIsBurger(false)

    return (
        <>
            <header className={`header-top header__wrapper-burger ${isBurger ? 'burger' : ''}`}>
                <div className="container">
                    <div className="header-top__wrap">
                        <nav className="header-menu">
                            <NavLink
                                to="/"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link header-menu__link--mobile ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                to="catalog"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Каталог
                            </NavLink>
                            <NavLink
                                to="promo"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Акции
                            </NavLink>
                            <NavLink
                                to="popular"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Популярные товары
                            </NavLink>
                            <NavLink
                                to="new"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Новинки
                            </NavLink>
                            <NavLink
                                to="news"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Новости
                            </NavLink>
                            <NavLink
                                to="about"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                О компании
                            </NavLink>
                            <NavLink
                                to="contacts"
                                onClick={closeBurger}
                                className={({ isActive }) =>
                                    `header-menu__link ${
                                        isActive
                                            ? 'header-menu__link--active'
                                            : ''
                                    }`
                                }
                            >
                                Контакты
                            </NavLink>

                            <div className="show-on-mobile-only">
                                <div className="header-menu__categories">
                                    <h6 className="header-menu__categories-title">Популярные категории</h6>
                                    <div className="header-menu__categories-flex">
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Письмо и графика</Link>
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Бумага для печати</Link>
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Товары для творчества</Link>
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Ручки</Link>
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Карандаши</Link>
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Блокноты</Link>
                                        <Link to="/" onClick={closeBurger} className="header-menu__categories-link">Скетчбуки</Link>
                                    </div>
                                </div>
                                <Link to="/login" onClick={closeBurger} className="header-menu__btn-login">
                                    <ProfileIcon/>
                                    Войти или зарегестрироваться
                                </Link>
                                <span className="header-menu__divider"></span>
                            </div>
                        </nav>
                        <div className="header-top__right">
                            <a className="header-top__right-link header-top__right-link--mail" href="mailto:info@kanzler.kg">
                                <MailIcon/>
                                <span>info@Kanzler.kg</span>
                            </a>
                            <a className="header-top__right-link header-top__right-link--phone" href="#">
                                <PhoneIconRed />
                                <span>Позвонить</span>
                                <ArrowIcon />
                            </a>
                        </div>
                        <div className="header-socials show-on-mobile-only">
                            <a target="_blank" href="#" className="header-socials__link">Facebook</a>
                            <a target="_blank" href="#" className="header-socials__link">Instagram</a>
                            <a target="_blank" href="#" className="header-socials__link">What's App</a>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom">
                <div className="container">
                    <div className="header-bottom__wrap">
                        <Link to="/" className="header-logo">
                            <img src={Logo} alt="Логотип" />
                        </Link>
                        <HeaderCatalog/>
                        <div className="header-search">
                            <label>
                                <ZoomIcon className="header-search__icon" />
                                <input
                                    placeholder="Найти товар"
                                    id="headerSearch"
                                    type="text"
                                    className="header-search__input"
                                />
                            </label>
                            <div className="header-search__results"></div>
                        </div>
                        <div className="header-bottom__controls">
                            <a href="#" className="header-btn header-btn--phone"><PhoneIconRed/></a>
                            <button type="button" className="header-btn header-btn--search"><ZoomIcon/></button>
                            <Link to="/cart" className="header-btn header-btn--cart">
                            <span className="header-btn--cart__img">
                                <CartIcon />
                                <span className="header-btn--cart__counter">
                                    0
                                </span>
                            </span>
                            </Link>
                            <button type="button" className="header-btn header-btn--profile">
                                <ProfileIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`header__burger-container ${isBurger ? 'burger' : ''}`} onClick={closeBurger}></div>
            <div className={`header__burger ${isBurger ? 'burger' : ''}`} onClick={toggleBurger}>
                <span></span>
            </div>

        </>
    )
}

export default Header
