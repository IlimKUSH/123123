import React, {useState} from 'react';
import {Link} from "react-router-dom";

const HeaderCatalogCol = ({cat}) => {
    const [showMore, setShowMore] = useState(false)

    const toggleShowMore = () => setShowMore(!showMore)

    return (
        <div className="header-catalog__col">
            <Link to="/" className="header-catalog__col-title">{cat.catName}</Link>
            <div className={`header-catalog__col-list ${showMore ? 'header-catalog__col-list--active' : ''}`}>
                {
                    cat.subSubCat.map((el1, ind1) => (
                        <Link className="header-catalog__col-link" to="#" key={ind1}>{el1.name}</Link>
                    ))
                }
            </div>
            {
                cat.subSubCat.length > 5 && <button type="button" className="header-catalog__col-btn-more" onClick={toggleShowMore}>{showMore ? 'Свернуть' : 'Ещё'}</button>
            }
        </div>
    );
};

export default HeaderCatalogCol;