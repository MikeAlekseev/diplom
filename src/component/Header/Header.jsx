import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { CatalogButton } from "../CatalogButton/CatalogButton";
import { Search } from "../Search";
import { UserAuth } from "../UserAuth";
import { products } from "../../data";

export const Header = ({ basketState }) => {
  return (
    <header className="header center">
      {/* Верхняя часть шапки сайта */}
      <div className="header__up">
        <div className="header__up__list">
          {/* Логотип с ссылкой на главную страницу */}
          <Link to="/" className="logo">
            <img src="/img/logo.png" alt="logo" />
          </Link>

          <div className="header__block1">
            {/* Кнопка для открытия каталога товаров */}
            <CatalogButton />
            {/* Компонент поиска на сайте */}
            <Search />
          </div>

          <div className="header__block2">
            {/* Ссылка на корзину покупок */}
            <Link to={"/basket"} className="basket">
              {/* Если в корзине есть товары, отображается их количество */}
              {basketState.length > 0 && (
                <span className="basket__number">{basketState.length}</span>
              )}
              {/* Иконка корзины */}
              <FontAwesomeIcon
                className="svg__basket"
                icon={faBasketShopping}
              />
            </Link>

            {/* Компонент для авторизации пользователя */}
            <div className="header__login">
              <UserAuth />
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть шапки сайта */}
      <div className="header__down">
        {/* Список с категориями или разделами товаров */}
        <ul className="header__down__list">
          {products.map((product) => (
            <li key={product.id} className="item__list">
              {/* Ссылка на страницу конкретного товара или категории */}
              <Link to={"/product/" + product.id}>{product.text}</Link>
            </li>
          ))}
        </ul>
        
        {/* Кнопка для отображения ссылки на связь */}
        <button className="header__down__link">
          <Link to="#">
            <p className="header__button__text">ссылка для связи</p>
          </Link>
        </button>
      </div>
    </header>
  );
};
