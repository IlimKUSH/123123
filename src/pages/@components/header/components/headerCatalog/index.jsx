import React, {useEffect, useState} from 'react';
import {ArrowIcon, ArrowIconRight, SquaresIcon} from "assets";
import HeaderCatalogCol from "./components/headerCatalogCol";
import './headerCatalog.scss'


const HeaderCatalog = () => {
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
    const [isCatalogOpen, setIsCatalogOpen] = useState(false)
    const openCatalog = () => setIsCatalogOpen(true)
    const closeCatalog = () => setIsCatalogOpen(false)

    const [activeCat, setActiveCat] = useState(products[0].mainCat)
    const [isAnimated, setIsAnimated] = useState(false)
    const [isDisplayed, setIsDisplayed] = useState(false)

    useEffect(() => {
        if (isCatalogOpen && !isDisplayed) {
            setIsDisplayed(true)
            const timeout = setTimeout(() => {
                setIsAnimated(true)
            },100)
            return () => {
                clearTimeout(timeout)
            }
        } else {
                if (isDisplayed) {
                setIsAnimated(false)
                const timeout = setTimeout(() => {
                    setIsDisplayed(false)
                },300)
                return () => {
                    clearTimeout(timeout)
                }
            }
        }
    },[isCatalogOpen])

    const manageActiveCat = (catName) => setActiveCat(catName)

    return (
        <>
            <div className="header-catalog-trigger" onMouseEnter={openCatalog} onMouseLeave={closeCatalog}>
                <button
                    type="button" className={`header-catalog-btn ${isCatalogOpen && 'header-catalog-btn--active'}`}>
                    <SquaresIcon />
                    <span>Каталог</span>
                    <ArrowIcon className="header-btn--catalog-arrow"/>
                </button>
                <div className={`header-catalog ${isAnimated && 'header-catalog--animated'}`}
                     style={{display: isDisplayed ? 'block' : 'none'}}>
                    <div className="container">
                        <div className="header-catalog__wrap">
                            <div className="header-catalog__sidebar">
                                <div className="header-catalog__sidebar-content">
                                    {
                                        products.map((el, ind) => (
                                            <button type="button" key={ind} className={`header-catalog__sidebar-btn ${activeCat === el.mainCat && 'header-catalog__sidebar-btn--active'}`} onClick={() => manageActiveCat(el.mainCat)}>
                                                <span>{el.mainCat} <ArrowIconRight/></span>
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="header-catalog__right">
                                <div className="header-catalog__content">
                                    {
                                        products.map((el, ind) => (
                                            <div className={`header-catalog__category ${activeCat === el.mainCat && 'header-catalog__category--active'}`} key={ind} data-cat={el.mainCat}>
                                                {
                                                    el.subCat.map((cat, i) => (
                                                        <HeaderCatalogCol cat={cat} key={i}/>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-catalog-bg ${isAnimated && 'header-catalog-bg--animated'}`} style={{display: isDisplayed ? 'block' : 'none'}}></div>
        </>
    );
};

export default HeaderCatalog;