import { useState, useEffect } from "react";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CatalogButton.style.css"; // Подключаем стили
import { Link } from "react-router-dom";
import { products } from "../../data";

export const CatalogButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(()=>{
    window.document.addEventListener('click', () => {
      setIsModalOpen(false);
  })
  }, [])

  const toggleModal = (e) => {
    e.stopPropagation();
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
            // onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие окна при клике на содержимое
          >
            <h3>Список:</h3>
            <ul>
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
