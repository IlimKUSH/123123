import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'

const Layout = () => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    return (
        <div className="layout">
            <Header />
            <div className="page">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
