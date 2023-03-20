import React from 'react'
import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import './breadcrumbs.scss'
import { routes } from 'index'

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes)
    return (
        <div className="breadcrumbs">
            {breadcrumbs.map(({ match, breadcrumb }, ind) => (
                <Link
                    className="breadcrumbs__link"
                    key={match.pathname}
                    to={match.pathname}
                >
                    {breadcrumb}
                    {ind !== breadcrumbs.length - 1 && (
                        <span className="breadcrumbs__divider">/</span>
                    )}
                </Link>
            ))}
        </div>
    )
}

export default Breadcrumbs
