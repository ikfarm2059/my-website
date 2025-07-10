import React, { useState } from 'react';

import workDailySoyPrep from '../assets/work-daily-soy-prep.jpg';
import workDailyStubbleCultch from '../assets/work-daily-stubble-cultch.jpg';
import workDailyPowerHarrow from '../assets/work-daily-power-harrow.jpg';

const dailyEntries = [
  {
    image: workDailySoyPrep,
    alt: '大豆圃場準備',
    caption: '大豆圃場準備、全面除草剤散布'
  },
  {
    image: workDailyStubbleCultch,
    alt: 'スタブルカルチ',
    caption: 'スタブルカルチ'
  },
  {
    image: workDailyPowerHarrow,
    alt: '４ｍパワーハロー',
    caption: '４ｍパワーハロー'
  }
];

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
    <section id="work-daily" className="section">
      <h2>Work Daily</h2>
      <div className="work-daily-carousel">
        <div className="carousel-slide">
          <img src={dailyEntries[currentIndex].image} alt={dailyEntries[currentIndex].alt} />
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
    </section>
  );
}

export default WorkDaily;
