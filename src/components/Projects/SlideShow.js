import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";

const SlideShow = ({ slides = [] }) => {
  const [currIndex, setCurrIndex] = useState(0);

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.imgUrl;
    });
  }, [slides]);

  const onLeft = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  const onRight = () => {
    if (currIndex < slides.length - 1) {
      setCurrIndex(currIndex + 1);
    }
  };

  return (
    <div className="slideshow-container">
      <FaArrowLeft className="arrow left-arrow" onClick={onLeft} disabled={currIndex === 0} />

      {slides.map((slide, i) => (
        <Slide key={i} slide={slide} isDisplayed={i === currIndex} />
      ))}

      <FaArrowRight className="arrow right-arrow" onClick={onRight} disabled={currIndex === slides.length - 1} />
    </div>
  );
};

const Slide = ({ slide, isDisplayed }) => {
  return (
    <div className="slide" style={{ display: isDisplayed ? "block" : "none" }}>
      <h3>{slide.name}</h3>
      <div className="project-image-container"> {/* Unique class name */}
        <img src={slide.imgUrl} alt={slide.name} />
      </div>
      <p>{slide.description}</p>
    </div>
  );
};

export default SlideShow;
