import React from 'react';
import {Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Breadcrumbs from "../@components/breadcrumbs";
import ProductCard from "../@components/productCard";
import CustomSelect from "../@components/customSelect";

import {ArrowIconBlack} from "assets";
import './catalog.scss'

const Catalog = () => {
    const products = [
        {
            mainCat: 'Письмо и графика',
            subCat: [
                {
                    catName: 'Бумага',
                    subSubCat: [
                        {
                            name: 'Бумага для печати',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Для акварели',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Ручки',
                    subSubCat: [
                        {
                            name: 'Бумага для печати',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Для акварели',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Карандаши',
                    subSubCat: [
                        {
                            name: 'Бумага для печати',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Для акварели',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Твёрдая бумага2',
                    subSubCat: [
                        {
                            name: 'Бумага для печати',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Для акварели',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары1',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары2',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары3',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары4',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары5',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары6',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары7',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары8',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары9',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары10',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары11',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары12',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары13',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары14',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары15',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
        {
            mainCat: 'Художественные товары16',
            subCat: [
                {
                    catName: 'Кисточки',
                    subSubCat: [
                        {
                            name: 'Кисточки из лисьего хвоста',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Кисточки для масла',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки1',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки2',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки3',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        },
                        {
                            name: 'Большие, широкие кисточки4',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },,
                        {
                            name: 'Фетровая',
                            items: []
                        },
                    ],
                },
                {
                    catName: 'Краски1',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски2',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски3',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
                {
                    catName: 'Краски4',
                    subSubCat: [
                        {
                            name: 'Маслянные краски',
                            items: [
                                {
                                    name: 'Цветная бумага Aristotel',
                                    price: '240',
                                    available: true,
                                },
                                {
                                    name: 'Цветная бумага Bonk',
                                    price: '340',
                                    available: false
                                },
                            ],
                        },
                        {
                            name: 'Краски для стен',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        },
                        {
                            name: 'Фетровая',
                            items: []
                        }
                    ],
                },
            ]
        },
    ]

    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog-wrap">
                    <div className="catalog-left">
                        <Breadcrumbs/>
                        <div className="catalog-filter">
                            <Accordion alwaysOpen>
                                {
                                    products.map((el, ind) => (
                                        <Accordion.Item eventKey={ind} key={ind}>
                                            <Accordion.Header>{el.mainCat} <ArrowIconBlack/></Accordion.Header>
                                            <Accordion.Body>
                                                <div className="catalog-filter__subCat">
                                                    <Link to="#" className="catalog-filter__subCat-link">Посмотреть все товары</Link>
                                                    <Accordion alwaysOpen>
                                                        {
                                                            el.subCat.map((subCat, i) => (
                                                                <Accordion.Item eventKey={i} key={i}>
                                                                    <Accordion.Header>{subCat.catName} <ArrowIconBlack/></Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="catalog-filter__subSubCat">
                                                                            <Link className="catalog-filter__subSubCat-link" to="#">Посмотреть все товары</Link>
                                                                            {
                                                                                subCat.subSubCat.map((subSubCat, index) => (
                                                                                    <Link className="catalog-filter__subSubCat-link" to="#" key={index}>{subSubCat.name}</Link>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            ))
                                                        }
                                                    </Accordion>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>
                    <div className="catalog-right">
                        <div className="catalog-categories">
                            <Link to='#'>Ручки</Link>
                            <Link to='#'>Ручки</Link>
                            <Link to='#'>Ручки</Link>
                            <Link to='#'>Ручки</Link>
                        </div>
                        <div className="catalog-banner">
                            <h4 className="catalog-banner__title">Создай новогоднее настроение вместе с kanzler</h4>
                            <Link className="catalog-banner__link" to='#'>подробнее</Link>
                        </div>
                        <div className="catalog-results">
                            <h2 className="catalog-results__title">Каталог</h2>
                            <div className="catalog-results__top">
                                <p className="catalog-results__count">1420 товара(-ов)</p>
                                <CustomSelect name="select-products"/>
                            </div>
                            <div className="catalog-results__grid">
                                {[...Array(11)].map((x, i) => (
                                    <ProductCard key={i} active border />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;