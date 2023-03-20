import React from 'react';
import Breadcrumbs from "../@components/breadcrumbs";
import NewsCard from "../@components/newsCard";
import './news.scss'
import CustomSelect from "../@components/customSelect";

const News = () => {
    return (
        <div className="news">
            <div className="container">
                <Breadcrumbs/>
                <CustomSelect name="custom-news"/>
                <div className="news-grid">
                    {[...Array(11)].map((x, i) => (
                        <NewsCard key={i} iconCircle={true}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;