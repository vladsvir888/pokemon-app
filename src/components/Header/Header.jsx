import React from 'react';
import cn from 'classnames';

import Logo from '../Logo';
import NavMenu from '../NavMenu/NavMenu';

import styles from './Header.module.css';

import logo from '../../img/pokemon-logo.svg';

const Header = () => {
    const navItems = [{
        text: "Home",
        to: "/",
        end: true
    }, {
        text: "Search",
        to: "/search"
    }];

    return (
        <header className="header">
            <div className={cn("container", styles.container)}>
                <Logo 
                    classes={styles.logo} 
                    img={logo} 
                    text="Home" 
                    sizes={{width: 200, height: 75}} 
                />
                <NavMenu items={navItems} />
            </div>
        </header>
    );
};

export default Header;