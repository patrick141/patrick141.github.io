import {useState} from "react";
import '../styles.css'

const TopBanner = ({message}) => {
    const [isVisible, setisVisible] = useState(true);

    const onClose = () => {
        setisVisible(false);
    }

    if(!isVisible){
        return null;
    }

    return (
        <div className="alert">
            <span>{message}</span>
            <button onClick={onClose} className="close-btn">X</button>
        </div>
    )
}

export default TopBanner;