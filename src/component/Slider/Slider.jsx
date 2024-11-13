import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Slider.style.css'

const images = [
    '/img/modem_slider.jpg', // Замените ссылки на свои изображения
    '/img/router_slider.png',
    '/img/smart_slider.png'
  ];
  
  export function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const  prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const nextSlide  = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); 
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
        <button className="slider__button next" onClick={nextSlide}>❮</button>
        <button className="slider__button prev" onClick={prevSlide}>❯</button>
      </div>
    );
  }