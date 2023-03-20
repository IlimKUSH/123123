import React from 'react'
import { Link } from 'react-router-dom'
import TitleSection from 'pages/@components/titleSection'
import {
    CategoriesKanzler,
    CategoriesBurger,
    CategoriesLetter,
    CategoriesPen,
    CategoriesScissors,
    CategoriesSale,
    CategoriesGift,
    CategoriesToys,
    CategoriesOffice,
    CategoriesArt,
    CategoriesDraw,
    CategoriesPoly,
} from 'assets'

import './categories.scss'

const Categories = () => {
    return (
        <div className="categories">
            <div className="container">
                <TitleSection>Категории</TitleSection>
                <div className="categories__grid row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/kanzler" className="categories__item">
                            <img src={CategoriesKanzler} alt="Kanzler" />
                            <p>Kanzler</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/burger" className="categories__item">
                            <img src={CategoriesBurger} alt="Bürger" />
                            <p>Bürger</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/graphics" className="categories__item">
                            <img
                                src={CategoriesLetter}
                                alt="Письмо и графика"
                            />
                            <p>Письмо и графика</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/graphics" className="categories__item">
                            <img src={CategoriesPen} alt="Письмо и графика" />
                            <p>Письмо и графика</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/office-supplies" className="categories__item">
                            <img src={CategoriesScissors} alt="Канц товары" />
                            <p>Канц товары</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/arts-supplies" className="categories__item">
                            <img
                                src={CategoriesDraw}
                                alt="Художественные товары"
                            />
                            <p>Художественные товары</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/arts" className="categories__item">
                            <img src={CategoriesArt} alt="Творчество" />
                            <p>Творчество</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/poly-materials" className="categories__item">
                            <img
                                src={CategoriesPoly}
                                alt="Полиграфические материалы"
                            />
                            <p>Полиграфические материалы</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/office-technic" className="categories__item">
                            <img
                                src={CategoriesOffice}
                                alt="Офисное  оборудование"
                            />
                            <p>Офисное оборудование</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/games-and-toys" className="categories__item">
                            <img src={CategoriesToys} alt="Игры и игрушки" />
                            <p>Игры и игрушки</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/souvenirs" className="categories__item">
                            <img
                                src={CategoriesGift}
                                alt="Сувенирная продукция"
                            />
                            <p>Сувенирная продукция</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to="/catalog/sales" className="categories__item">
                            <img src={CategoriesSale} alt="Распродажи" />
                            <p>Распродажи</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
