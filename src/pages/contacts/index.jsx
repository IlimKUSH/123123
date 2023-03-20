import React from 'react'
import Breadcrumbs from '../@components/breadcrumbs'
import TitleSection from '../@components/titleSection'
import Branches from '../@components/branches'
import {
    SocialsFaceBookIconBlack,
    SocialsInstagramIconBlack,
    SocialsWhatsAppIconBlack,
    ArrowIconDown,
} from '../../assets'
import './contacts.scss'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <Breadcrumbs />
                <TitleSection redLine={false}>Контакты</TitleSection>
                <div className="contacts-banner">
                    <div className="contacts-banner__wrap">
                        <p className="contacts-banner__text">
                            Будем рады видеть вас у нас в офисе, ответить на
                            любые вопросы, показать интересующий вас товар.{' '}
                        </p>
                        <div className="contacts-banner__right">
                            <div className="contacts-banner__socials">
                                <p>Мы в соц сетях:</p>
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
                            <a
                                href="#"
                                target="_blank"
                                className="contacts__link-download"
                            >
                                Скачать реквизиты
                                <ArrowIconDown />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Branches showTitle={false} />
            <div className="contacts-bottom">
                <div className="container">
                    <a
                        href="#"
                        target="_blank"
                        className="contacts__link-download"
                    >
                        Скачать реквизиты
                        <ArrowIconDown />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts
