import React from 'react'
import { useState } from "react";

const MenuBar = ({images}) => {
    const [currIndex, setCurrIndex] = useState(0);

    const onPreviousClick = () => {
        setCurrIndex((currIndex - 1 + images.length) % images.length);
    }

    const onNextClick = () => {
        setCurrIndex((currIndex + 1) % images.length);
    }

    return(<React.Fragment>
        <text>HI</text>
        <div>
            <button onClick={onPreviousClick}>LEFT</button>
            <button onClick={onNextClick}>RIGHT</button>
        </div>
        {images.map((url, i) => (
             <img 
                key={url}
                src={url} 
                alt="image displayed"
                height="200" 
                width="200"
                style={{ display: i === currIndex ? 'block' : 'none'}} // Only display the current image
                />
        ))}
    </React.Fragment>
    );

}

export default MenuBar;