import React from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";

import cn from 'classnames';

import UIImg from 'components/UI/UIImg';

const Logo = ({ 
    classes, 
    text, 
    src,
    sizes 
}) => {
    const length = useLocation().pathname.length;

    return (
        <div className={cn("logo", classes)}>
            {length > 1 
                ? 
                <Link to="/">
                    <UIImg 
                        width={sizes.width}
                        height={sizes.height}
                        src={src}
                        alt={text}
                    />
                </Link>
                : 
                <UIImg 
                    width={sizes.width}
                    height={sizes.height}
                    src={src}
                    alt={text}
                />
                
            }
        </div>
    );
};

export default Logo;