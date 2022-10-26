import React from 'react';

import cn from 'classnames';

const UIImg = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img {...props} className={cn("img", props.className)} />
    );
};

export default UIImg;