import { useState, useEffect } from "react";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CatalogButton.style.css";
import { Link } from "react-router-dom";
import { products } from "../../data";

export const CatalogButton = () => {
  // Состояние для отслеживания, открыто ли модальное окно
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Хук useEffect, добавляющий обработчик кликов по документу
  useEffect(() => {
    // При клике в любом месте документа закрывает модальное окно
    window.document.addEventListener('click', () => {
      setIsModalOpen(false);
    });

    // Удаление обработчика при размонтировании компонента
    return () => {
      window.document.removeEventListener('click', () => {
        setIsModalOpen(false);
      });
    };
  }, []);

  // Функция для переключения состояния модального окна
  const toggleModal = (e) => {
    // Останавливаем всплытие события, чтобы клик внутри компонента
    // не закрыл модальное окно
    e.stopPropagation();
    // Переключаем состояние (открыть/закрыть)
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="header__button__catalog">
      {/* Кнопка для открытия/закрытия модального окна */}
      <button className="catalog-button" onClick={toggleModal}>
        <FontAwesomeIcon icon={faList} />
        Catalog
      </button>

      {/* Модальное окно, которое отображается только если isModalOpen === true */}
      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          {/* Контент модального окна */}
          <div className="modal-content">
            <h3>Список:</h3>
            <ul>
              {/* Отображение списка товаров */}
              {products.map((product) => (
                <li key={product.id} className="item__list">
                  <Link to={"/product/" + product.id}>{product.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

