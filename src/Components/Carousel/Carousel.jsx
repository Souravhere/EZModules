import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css'; // Import your CSS file for styling

const Carousel = ({
  children,
  autoPlay = false,
  autoPlayInterval = 3000,
  infinite = true,
  showIndicators = true,
  showNav = true,
  lazyLoad = true,
  navButtonStyle = {},
  indicatorStyle = {},
  carouselWrapperStyle = {},
  carouselSlideStyle = {},
  indicatorActiveStyle = {},
  slideContainerStyle = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    if (infinite) {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    } else if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (infinite) {
      setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(autoPlayRef.current);
    }
  }, [autoPlay, currentIndex]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touchStartX = e.touches[0].clientX;
      carouselRef.current.touchStartX = touchStartX;
    };

    const handleTouchMove = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchStartX = carouselRef.current.touchStartX;

      if (touchStartX - touchEndX > 50) {
        nextSlide();
      }

      if (touchStartX - touchEndX < -50) {
        prevSlide();
      }
    };

    const carouselNode = carouselRef.current;
    carouselNode.addEventListener('touchstart', handleTouchStart);
    carouselNode.addEventListener('touchmove', handleTouchMove);

    return () => {
      carouselNode.removeEventListener('touchstart', handleTouchStart);
      carouselNode.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
      style={slideContainerStyle}
    >
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          ...carouselWrapperStyle
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{
              opacity: lazyLoad && index !== currentIndex ? 0 : 1,
              ...carouselSlideStyle
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {showNav && (
        <>
          <button
            className="carousel-nav carousel-prev"
            onClick={prevSlide}
            style={navButtonStyle}
            aria-label="Previous Slide"
          >
            &lt;
          </button>
          <button
            className="carousel-nav carousel-next"
            onClick={nextSlide}
            style={navButtonStyle}
            aria-label="Next Slide"
          >
            &gt;
          </button>
        </>
      )}

      {showIndicators && (
        <div className="carousel-indicators" style={indicatorStyle}>
          {React.Children.map(children, (child, index) => (
            <button
              key={index}
              className={`carousel-indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={currentIndex === index ? indicatorActiveStyle : {}}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  infinite: PropTypes.bool,
  showIndicators: PropTypes.bool,
  showNav: PropTypes.bool,
  lazyLoad: PropTypes.bool,
  navButtonStyle: PropTypes.object,
  indicatorStyle: PropTypes.object,
  carouselWrapperStyle: PropTypes.object,
  carouselSlideStyle: PropTypes.object,
  indicatorActiveStyle: PropTypes.object,
  slideContainerStyle: PropTypes.object,
};

export default Carousel;
