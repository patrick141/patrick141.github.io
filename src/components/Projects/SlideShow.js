import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";

const SlideShow = ({ slides = [] }) => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.imgUrl;
    });
  }, [slides]);

  const onLeft = () => {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
  };

  const onRight = () => {
    if (currIndex < slides.length - 1) setCurrIndex(currIndex + 1);
  };

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-container">
        <button
          className={`arrow left-arrow ${currIndex === 0 ? "arrow-disabled" : ""}`}
          onClick={onLeft}
          disabled={currIndex === 0}
          aria-label="Previous project"
        >
          <FaArrowLeft />
        </button>

        <div className="slides-viewport">
          {slides.map((slide, i) => (
            <Slide key={i} slide={slide} isDisplayed={i === currIndex} />
          ))}
        </div>

        <button
          className={`arrow right-arrow ${currIndex === slides.length - 1 ? "arrow-disabled" : ""}`}
          onClick={onRight}
          disabled={currIndex === slides.length - 1}
          aria-label="Next project"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="slideshow-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currIndex ? "dot-active" : ""}`}
            onClick={() => setCurrIndex(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const GitHubLink = ({ url }) => {
  const handleClick = () => window.open(url, "_blank", "noopener,noreferrer");
  return (
    <button onClick={handleClick} className="project-github-btn">
      View on GitHub →
    </button>
  );
};

const Slide = ({ slide, isDisplayed }) => {
  return (
    <div className="slide" style={{ display: isDisplayed ? "flex" : "none" }}>
      <div className="project-image-container">
        <img src={slide.imgUrl} alt={slide.name} />
      </div>
      <div className="project-info">
        <h3>{slide.name}</h3>
        <p>{slide.description}</p>

        {slide.tags && (
          <div className="project-tags">
            {slide.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
        )}

        {slide.githubUrl && <GitHubLink url={slide.githubUrl} />}
      </div>
    </div>
  );
};

export default SlideShow;