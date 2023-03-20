import React from 'react';
import {Link} from "react-router-dom";
import Breadcrumbs from "../@components/breadcrumbs";
import {ArrowIconLong, ArrowIconPrev, NewsExample} from "assets";
import NewsCard from "../@components/newsCard";
import './newsOnePage.scss'


const NewsOnePage = () => {
    return (
        <div className="newsPage">
            <div className="container">
                <Breadcrumbs/>
                <div className="newsPage-wrap">
                    <div className="newsPage-left">
                        <img src={NewsExample} alt="Фото новостей" className="newsPage-left__img"/>
                        <div className="newsPage-left__links">
                            <Link className="newsPage-left__links--prev" to="/news/0"><ArrowIconPrev/> Предыдущая</Link>
                            <Link className="newsPage-left__links--next" to="/news/2">Следующая <ArrowIconPrev/></Link>
                        </div>
                    </div>
                    <div className="newsPage-content">
                        <h1 className="newsPage-title">Приходите на мастер-классы делать подарки в наших магазинах!</h1>
                        <p className="newsPage-date">16.12.2022</p>
                        <p className="newsPage-text">Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec eget molestie ornare lorem mattis.</p>
                        <p className="newsPage-text">Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec eget molestie ornare lorem mattis.</p>
                        <div className="newsPage-gallery">
                            <img src={NewsExample} alt="Фото"/>
                            <img src={NewsExample} alt="Фото"/>
                            <img src={NewsExample} alt="Фото"/>
                            <img src={NewsExample} alt="Фото"/>
                        </div>
                        <p className="newsPage-text">Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec eget molestie ornare lorem mattis.</p>
                    </div>
                </div>
                <div className="newsPage-recommend">
                    <div className="news-grid">
                        {[...Array(4)].map((x, i) => (
                            <NewsCard key={i} iconCircle={true}/>
                        ))}
                    </div>
                    <Link to="/news" className="newsPage-recommend__link">Все новости <ArrowIconLong/></Link>
                </div>

            </div>
        </div>
    );
};

export default NewsOnePage;