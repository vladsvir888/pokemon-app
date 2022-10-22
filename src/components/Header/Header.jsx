import React from 'react';

import cn from 'classnames';

import Logo from '../Logo';
import NavMenu from '../NavMenu/NavMenu';

import styles from './Header.module.css';

import logo from '../../img/pokemon-logo.svg';

const Header = () => {
    const headerNavItems = [{
        text: "Home",
        to: "/",
        end: true
    }, {
        text: "Overview",
        to: "/pokemon"
    }, {
        text: "Search",
        to: "/search"
    }];

    return (
        <header className="header">
            <div className={cn("container", styles.container)}>
                <Logo 
                    classes={styles.logo}
                    sizes={{width: 200, height: 75}}
                    src={logo} 
                    text="Home Page"
                />
                <NavMenu items={headerNavItems} />
            </div>
        </header>
    );
};

export default Header;