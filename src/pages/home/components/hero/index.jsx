import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowIconCircle, PhoneIconHome } from 'assets'

import './hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero-title">
                        Канцелярия, товары для полиграфии
                    </h1>
                    <p className="hero-subtitle">
                        Основные направления – бумага и расходные материалы для
                        полиграфии, поставки элитного кофе и чая, немецкого
                        премиум пива.
                    </p>
                    <Link to="catalog" className="hero-link">
                        Перейти в каталог
                        <ArrowIconCircle className="svg-arrow-icon-circle" />
                    </Link>
                    <button type="button" className="hero-btn-phone">
                        <PhoneIconHome />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
