import React from 'react';
import cn from 'classnames';

import Logo from '../Logo';
import NavMenu from '../NavMenu/NavMenu';

import { HEADER_NAV_ITEMS } from '../../constants';

import styles from './Header.module.css';

import logo from '../../img/pokemon-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className={cn("container", styles.container)}>
                <Logo 
                    classes={styles.logo} 
                    img={logo} 
                    text="Home" 
                    sizes={{width: 200, height: 75}} 
                />
                <NavMenu items={HEADER_NAV_ITEMS} />
            </div>
        </header>
    );
};

export default Header;