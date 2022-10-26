import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import cn from 'classnames';

import { handledarkMode } from 'store/actions/darkModeAction';

import Logo from 'components/Logo';
import NavMenu from 'components/NavMenu';
import DarkModeSwitcher from 'components/DarkModeSwitcher';

import styles from './Header.module.css';

import logo from 'img/pokemon-logo.svg';

const Header = () => {
    const root = document.documentElement;
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

    const dispatch = useDispatch();

    const mode = useSelector((state) => state.darkModeReducer);

    const { isdarkMode } = mode;

    const switchDarkMode = () => {
        isdarkMode
        ? dispatch(handledarkMode(false))
        : dispatch(handledarkMode(true));
    }

    useEffect(() => {
        isdarkMode 
        ? root.classList.add('dark') 
        : root.classList.remove('dark');
    }, [isdarkMode]);

    return (
        <header className="header">
            <div className={cn("container", styles.container)}>
                <div className={styles.header__item}>
                    <Logo 
                        classes={styles.logo}
                        sizes={{width: 200, height: 75}}
                        src={logo} 
                        text="Home Page"
                    />
                    <NavMenu items={headerNavItems} />
                </div>
                <div className={styles.header__item}>
                    <DarkModeSwitcher 
                        switchDarkMode={switchDarkMode} 
                        isdarkMode={isdarkMode} 
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;