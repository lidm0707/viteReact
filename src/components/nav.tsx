import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../css/Nav.module.css'


const navRight: React.FC = () => {
    return (
        <nav className={menu.menuRight}>
            <ul >
                <li className={menu.li}><Link to="/">หน้าแรก</Link></li>
                <li className={menu.li}><Link to="/about">เกี่ยวกับ</Link></li>
                <li className={menu.li}></li>
                <li className={menu.li}></li>
                <li className={menu.li}></li>
                <li className={menu.li}></li>
            </ul>
        </nav>
    );
}

export default navRight;
