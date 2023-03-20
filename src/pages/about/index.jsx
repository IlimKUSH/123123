import React from 'react'
import './about.scss'
import {
    AboutClients,
    AboutOffice,
    AboutShip,
    AboutStock,
    MarkIcon,
    PhoneIcon,
    PhoneIconMobile,
    SocialsFaceBookIconBlack,
    SocialsInstagramIconBlack,
    SocialsWhatsAppIconBlack,
} from 'assets'
import {providers} from "assets/images/providers";
import TitleSection from '../@components/titleSection'


const About = () => {
    return (
        <div className="about">
            <div className="about-main about-section">
                <div className="container">
                    <div className="about-main__row about-row row">
                        <div className="col-md-6">
                            <img
                                className="about-main__img about-row__img about-row__img--big"
                                src={AboutOffice}
                                alt="Фото офиса"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="about-main__content">
                                <TitleSection redLineShort={true}>
                                    О нас
                                </TitleSection>
                                <p className="about-text">
                                    Компания “KANZLER” (Канцлер) начала работу в
                                    1999 году в качестве поставщика в Кыргызскую
                                    Республику от концерна BASF AG
                                    профессиональных носителей информации для
                                    телерадиокомпаний. В 2003 году начинает
                                    работу компания Bürger (Бюргер), осуществляя
                                    поставки расходных материалов для типографий
                                    Кыргызстана от ведущих производителей
                                    Европы.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-banner">
                <p className="about-text">
                    Сейчас компании поставляют товары более чем от 30
                    европейских производителей. Основные направления — бумага и
                    расходные материалы для полиграфии, канцелярские товары,
                    промо-сувениры, поставки элитного кофе и чая, немецкого
                    премиум пива.
                </p>
            </div>
            <div className="about-locations about-section">
                <div className="container">
                    <div className="about-locations__row about-row row">
                        <div className="col-lg-6">
                            <div className="about-locations__left">
                                <TitleSection redLineShort={true}>
                                    Где можно приобрести
                                </TitleSection>
                                <p className="about-text">
                                    Весь ассортимент товаров можно приобрести в
                                    офисе компаний, который находится в самом
                                    центре столице г. Бишкек. Офис занимает
                                    площадь более 470 м2.
                                </p>
                                <br />
                                <br />
                                <p className="about-text">
                                    Оригинальные магазины Канцлер только по трём
                                    адресам.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-locations__right row">
                                <div className="col-sm-4">
                                    <div className="about-locations__card">
                                        <MarkIcon />
                                        <h5 className="about-locations__card-title">
                                            Огонбаева, 222
                                        </h5>
                                        <a
                                            className="about-text"
                                            href="tel:+996777902233"
                                        >
                                            <PhoneIcon /> 0777 90 22 33
                                        </a>
                                        <a
                                            className="about-text"
                                            href="tel:+996312902233"
                                        >
                                            <PhoneIconMobile /> 0312 90 22 33
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="about-locations__card">
                                        <MarkIcon />
                                        <h5 className="about-locations__card-title">
                                            Эркиндик, 7
                                        </h5>
                                        <a
                                            className="about-text"
                                            href="tel:+996777902234"
                                        >
                                            <PhoneIcon /> 0777 90 22 34
                                        </a>
                                        <a
                                            className="about-text"
                                            href="tel:+996312902234"
                                        >
                                            <PhoneIconMobile /> 0312 90 22 34
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="about-locations__card">
                                        <MarkIcon />
                                        <h5 className="about-locations__card-title">
                                            Уметалиева, 84
                                        </h5>
                                        <a
                                            className="about-text"
                                            href="tel:+996777902236"
                                        >
                                            <PhoneIcon /> 0777 90 22 36
                                        </a>
                                        <a
                                            className="about-text"
                                            href="tel:+996312902236"
                                        >
                                            <PhoneIconMobile /> 0312 90 22 36
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stock about-section">
                <div className="container">
                    <div className="about-stock__row about-row row">
                        <div className="col-md-6">
                            <div className="about-stock__left">
                                <TitleSection redLineShort={true}>
                                    Ассортимент
                                </TitleSection>
                                <p className="about-text">
                                    Благодаря доверию наших клиентов и качеству
                                    товаров, ассортимент продуктов, поставляемых
                                    компаниями Kanzler&Bürger, постоянно
                                    расширяется: на сегодняшний день
                                    предлагается более 6000 наименований
                                    различных продуктов.
                                </p>
                                <div className="about-stock__socials">
                                    <a href="#" target="_blank">
                                        <SocialsWhatsAppIconBlack />
                                        What’s App
                                    </a>
                                    <a href="#" target="_blank">
                                        <SocialsInstagramIconBlack />
                                        Instagram
                                    </a>
                                    <a href="#" target="_blank">
                                        <SocialsFaceBookIconBlack />
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="about-stock__img about-row__img about-row__img--big"
                                src={AboutStock}
                                alt="Фото Ассортимента"
                            />
                        </div>
                    </div>
                    <div className="about-stock__bg"></div>
                </div>
            </div>
            <div className="about-clients about-section">
                <div className="container">
                    <div className="about-clients__row about-row row">
                        <div className="col-md-6">
                            <img
                                className="about-row__img"
                                src={AboutClients}
                                alt="Фото"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="about-clients__right">
                                <TitleSection redLineShort={true}>
                                    Наши постоянные клиенты
                                </TitleSection>
                                <p className="about-text">
                                    Постоянными клиентами компаний стали
                                    типографии, издательские дома, дизайнеры,
                                    художники, телекомпании, а также более 2000
                                    других успешных компаний нашей страны.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-ship about-section">
                <div className="container">
                    <div className="about-ship__row about-row row">
                        <div className="col-md-6">
                            <div className="about-ship__left">
                                <TitleSection redLineShort={true}>
                                    Доставка по стране
                                </TitleSection>
                                <p className="about-text">
                                    Крупногабаритные грузы, большие заказы, а
                                    также доставки по республикам Кыргызстан,
                                    Таджикистан, Узбекистан осуществляются со
                                    склада, который находится в промышленной
                                    зоне Бишкека и занимает 6000 м3.
                                </p>
                                <br />
                                <br />
                                <p className="about-text">
                                    На склад компании товары, в свою очередь,
                                    доставляются авиа-, авто- или ж/д
                                    транспортом из Евросоюза.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="about-row__img"
                                src={AboutShip}
                                alt="Фото"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-providers about-section">
                <div className="container">
                    <div className="about-providers__content">
                        <TitleSection redLine={false}>
                            Наши поставщики
                        </TitleSection>
                        <p className="about-text">
                            "Качественная канцелярия мировых брендов: Staedtler,
                            Scneider, Faber-Castell, Brunnen, Pentel,
                            ErichKrause, BrunoVisconti, Axent, Невская Палитра,
                            ГАММА, Cordenons, Heyda, KnorrPrandell, STEWO,
                            Diplomat, Fellowes."
                        </p>
                    </div>
                    <div className="about-providers__grid">
                        {
                            providers.map((el, ind) => (
                                <img src={el} key={ind} alt="Поставщик" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
