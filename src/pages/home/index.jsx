import React from 'react'
import Hero from './components/hero'
import Categories from './components/categories'
import Sales from './components/sales'
import News from './components/newsSlider'
import Branches from '../@components/branches'
import ProductCardSlider from "../@components/productCardSlider";
import './hero.scss'

const Home = () => {
    return (
        <div className="homepage">
            <Hero />
            <Categories />
            <Sales />
            <ProductCardSlider title={'Популярные продукты'} cardActive={false} productPromo="Советуем" customClass={'section-slider-popular'} cardOldPrice={29400}/>
            <ProductCardSlider title={'Акционные товары'} productPromo="-20%" productPromoGreen={false} customClass={'section-slider-sales-products'} cardBorder={true}/>
            <News />
            <Branches />
        </div>
    )
}

export default Home
