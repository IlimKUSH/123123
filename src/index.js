import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

import Layout from './pages/@components/layout'
import Home from './pages/home'
import Cart from './pages/cart'
import NoPage from './pages/noPage'
import Contacts from './pages/contacts'
import About from './pages/about'
import News from "./pages/news";
import NewsOnePage from "./pages/newsOnePage";
import Catalog from "./pages/catalog";
import ProductOnePage from "./pages/productOnePage";
import {Provider} from "react-redux";
import {store} from "./app/store";

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home />, breadcrumb: 'Главная' },
            { path: 'catalog', element: <Catalog />, breadcrumb: 'Каталог' },
            { path: 'catalog/:id', element: <ProductOnePage />, breadcrumb: 'Товар' },
            { path: 'news', element: <News />, breadcrumb: 'Новости' },
            { path: 'news/:id', element: <NewsOnePage />, breadcrumb: 'Новость' },
            { path: 'cart', element: <Cart />, breadcrumb: 'Корзина' },
            { path: 'about', element: <About />, breadcrumb: 'О компании' },
            { path: 'contacts', element: <Contacts />, breadcrumb: 'Контакты' },
            { path: '*', element: <NoPage /> },
        ],
    },
]

export default function App() {
    return useRoutes(routes)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
)
