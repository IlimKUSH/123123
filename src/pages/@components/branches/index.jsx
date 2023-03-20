import React from 'react'
import Map from '../map'
import TitleSection from '../titleSection'
import { PhoneIcon, PhoneIconMobile } from 'assets'
import './branches.scss'

const Branches = ({ showTitle = true }) => {
    return (
        <div className="branches">
            <div className="container">
                {showTitle && <TitleSection>Филиалы</TitleSection>}
                <div className="branches-wrap">
                    <div className="branches-left">
                        <div className="branches-schedule">
                            <h5 className="branches-title branches-title--red">
                                Режим работы
                            </h5>
                            <p>Пн-Пт 9.00 - 18.00</p>
                            <p>Сб 9.00 - 18.00</p>
                            <p>Воскресенье выходной</p>
                        </div>
                        <div className="branches-location">
                            <h5 className="branches-title">Огонбаева, 222</h5>
                            <a href="tel:+996777902233">
                                <PhoneIcon /> 0777 90 22 33
                            </a>
                            <a href="tel:+996312902233">
                                <PhoneIconMobile /> 0312 90 22 33
                            </a>
                        </div>
                        <div className="branches-location">
                            <h5 className="branches-title">Эркиндик, 7</h5>
                            <a href="tel:+996777902234">
                                <PhoneIcon /> 0777 90 22 34
                            </a>
                            <a href="tel:+996312902234">
                                <PhoneIconMobile /> 0312 90 22 34
                            </a>
                        </div>
                        <div className="branches-location">
                            <h5 className="branches-title">Уметалиева, 84</h5>
                            <a href="tel:+996777902236">
                                <PhoneIcon /> 0777 90 22 36
                            </a>
                            <a href="tel:+996312902236">
                                <PhoneIconMobile /> 0312 90 22 36
                            </a>
                        </div>
                    </div>
                    <div className="branches-map">
                        <Map/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Branches
