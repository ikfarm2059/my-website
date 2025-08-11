import React, { useState } from 'react';
import './WorkDaily.css';
import { dailyEntries } from '../data/workDailyData.js';



function WorkDaily() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dailyEntries.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === dailyEntries.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="work-daily-carousel">
      <div className="carousel-slide">
        {dailyEntries[currentIndex].type === 'image' ? (
          <img src={dailyEntries[currentIndex].src} alt={dailyEntries[currentIndex].alt} />
        ) : (
          <video src={dailyEntries[currentIndex].src} alt={dailyEntries[currentIndex].alt} controls />
        )}
        <p>{dailyEntries[currentIndex].caption}</p>
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>&#10094;</button>
      <button className="carousel-button next" onClick={goToNext}>&#10095;</button>
      <div className="carousel-dots">
        {dailyEntries.map((slide, slideIndex) => (
          <span
            key={slideIndex}
            className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(slideIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default WorkDaily;