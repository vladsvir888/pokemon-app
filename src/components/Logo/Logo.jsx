import React from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";

import cn from 'classnames';

const Logo = ({ 
    classes, 
    text, 
    img,
    sizes 
}) => {
    const length = useLocation().pathname.length;

    return (
        <div className={cn("logo", classes)}>
            {length > 1 
                ? (
                    <Link to="/">
                        <span className="visually-hidden">{text}</span>
                        <img width={sizes.width} height={sizes.height} src={img} alt="" />
                    </Link>
                )
                : (
                    <>
                        <span className="visually-hidden">{text}</span>
                        <img width={sizes.width} height={sizes.height} src={img} alt="" />
                    </>
                )
            }
        </div>
    );
};

export default Logo;