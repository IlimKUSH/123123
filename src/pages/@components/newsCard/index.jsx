import React from 'react'
import { Link } from 'react-router-dom'
import { NewsExample, ArrowIconRed, ArrowIconCircleSmall } from 'assets'
import './newsCard.scss'

const NewsCard = ({iconCircle = false}) => {
    return (
        <Link to="/news/1"  className="news__card">
            <img
                className="news__card-img"
                src={NewsExample}
                alt="Превью новостей"
            />
            <div className="news__card-bottom">
                <p className="news__card-text">
                    Lorem ipsum dolor sit amet consectetur. In integer ultricies
                    suscipit dui nulla quam. Ligula tempor placerat velit lectus
                    tempus est nisi morbi. Pharetra lectus turpis eget curabitur
                    arcu elementum.
                </p>
                <p className="news__card-link">
                    Читать больше
                    {
                        iconCircle ? <ArrowIconCircleSmall/> : <ArrowIconRed />
                    }
                </p>
            </div>
        </Link>
    )
}

export default NewsCard
