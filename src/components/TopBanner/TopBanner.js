import { useState } from "react";
import "./TopBanner.css";

const TopBanner = ({ message, isDismissable, onClose }) => {
  const [isVisible, setisVisible] = useState(true);

  const closeBanner = () => {
    setisVisible(false);
    if(onClose && isDismissable) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="top-banner" onClick={() => setisVisible(false)}>
      <span>{message}</span>
      {isDismissable && (
        <button onClick={closeBanner} className="close-btn">
          X
        </button>
      )}
    </div>
  );
};

export default TopBanner;