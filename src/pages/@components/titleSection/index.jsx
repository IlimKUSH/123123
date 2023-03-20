import React from 'react'

const TitleSection = ({ children, redLine = true, redLineShort = false }) => {
    return (
        <h2 className="section-title">
            {children}
            {redLine && (
                <span
                    className="section-title__line"
                    style={{ width: redLineShort ? '14px' : '40px' }}
                ></span>
            )}
        </h2>
    )
}

export default TitleSection
