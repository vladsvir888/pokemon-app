import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <small className={styles.footer__copyright}>
                    &copy; Designed and developed by Vladislav Svirydovich
                </small>
            </div>
        </footer>
    );
};

export default Footer;