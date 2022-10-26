import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './NavMenu.module.css';

const NavMenu = ({ items }) => {
    return (
        <nav>
            <ul className={styles.nav__list}>
                {items.map(item => 
                    <li key={item.text} className={styles.nav__item}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                            end={item.end ? true : false}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavMenu;