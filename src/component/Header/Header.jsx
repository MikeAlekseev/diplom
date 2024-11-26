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
      <div className="header__up">
        <div className="header__up__list">
          <Link to="/" className="logo">
            <img src="/img/logo.png" alt="logo" />
          </Link>
          <div className="header__block1">
            <CatalogButton />
            <Search />
          </div>
          <div className="header__block2">
            <Link to={"/basket"} className="basket">
              {basketState.length > 0 && (
                <span className="basket__number">{basketState.length}</span>
              )}
              <FontAwesomeIcon
                className="svg__basket"
                icon={faBasketShopping}
              />
            </Link>
            <div className="header__login">
              <UserAuth />
            </div>
          </div>
        </div>
      </div>
      <div className="header__down">
        <ul className="header__down__list">
          {products.map((product) => (
            <li key={product.id} className="item__list">
              <Link to={"/product/" + product.id}>{product.text}</Link>
            </li>
          ))}
        </ul>
        <button className="header__down__link">
          <Link to="#">
            <p className="header__button__text">ссылка для связи</p>
          </Link>
        </button>
      </div>
    </header>
  );
};
