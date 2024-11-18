import { useState } from "react";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CatalogButton.style.css"; // Подключаем стили
import { Link } from "react-router-dom";

export const CatalogButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="header__button__catalog">
      {/* Кнопка для открытия/закрытия окна */}
      <button className="catalog-button" onClick={toggleModal}>
        <FontAwesomeIcon icon={faList} />
        Catalog
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие окна при клике на содержимое
          >
            <h3>Список:</h3>
            <ul>
            <li className="item__list">
                    <Link to="#">Ноутбуки</Link>
                  </li>
                  <li className="item__list">
                    <Link to="#">Роутеры</Link>
                  </li>
                  <li className="item__list">
                    <Link to="#">Модемы</Link>
                  </li>
                  <li className="item__list">
                    <Link to="#">Смартфоны</Link>
                  </li>
                  <li className="item__list">
                    <Link to="#">Планшеты</Link>
                  </li>
                  <li className="item__list">
                    <Link to="#">SSD</Link>
                  </li>
                  <li className="item__list">
                    <Link to="#">USB</Link>
                  </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};