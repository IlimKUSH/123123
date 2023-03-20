import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './customSelect.scss'
import {ArrowIcon, ArrowIconBlack, ArrowIconDown} from "../../../assets";

const CustomSelect = ({name}) => {
    return (
    <Dropdown className="custom-select">
        <Dropdown.Toggle id="dropdown-autoclose-true">
            Сначала новые
            <ArrowIconBlack/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#">Популярные</Dropdown.Item>
            <Dropdown.Item href="#">Цена по убыванию</Dropdown.Item>
            <Dropdown.Item href="#">Цена по возрастанию</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
};

export default CustomSelect;