import { useState, useEffect } from 'react';
import './Slider.style.css'

const images = [
  '/img/modem_slider.jpg',
  '/img/router_slider.png',
  '/img/smart_slider.png'
];

export function Slider() {
  // Состояние для хранения текущего индекса изображения
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для перехода к следующему слайду
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Функция для перехода к предыдущему слайду
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Автоматическая смена слайдов каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Вызывает `nextSlide` каждые 3000 мс
    return () => clearInterval(interval); // Очищает интервал при размонтировании компонента
  }, []);

  return (
    <div className="slider">
      {/* Отображение текущего изображения */}
      <img
        src={images[currentIndex]} // URL текущего изображения
        alt={`Slide ${currentIndex + 1}`} // Описание для текущего слайда
        className="slide"
      />
      {/* Кнопка для перехода к следующему слайду */}
      <button className="slider__button next" onClick={nextSlide}>❮</button>
      {/* Кнопка для перехода к предыдущему слайду */}
      <button className="slider__button prev" onClick={prevSlide}>❯</button>
    </div>
  );
}
