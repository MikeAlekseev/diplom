import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Layout.style.css";
import { useState } from "react";
import { BasketContext, SearchContext, UserContext } from "../../context";
import { getFromBasket } from "../../component/util/basketLocalStorage";
import { Search } from "../../component/Search";
import { UserAuth } from "../../component/UserAuth";
import { getUser } from "../../component/util/userLocalStorage";
import { CatalogButton } from "../../component/CatalogButton/CatalogButton";
import { products } from "../../data";
import { Exchange } from "../../component/Exchange";

export const Layout = ({ children }) => {
  const [basketState, setBasketState] = useState(getFromBasket());
  const [searchState, setSearchState] = useState("");
  const [userState, setUserState] = useState(getUser());

  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      <BasketContext.Provider
        value={{ products: basketState, addProduct: setBasketState }}
      >
        <SearchContext.Provider
          value={{ search: searchState, onChange: setSearchState }}
        >
          <div>
            <header className="header center">
              <div className="header__up">
                <div className="header__up__list">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="header__block1">
                    <CatalogButton />
                    <Search />
                  </div>
                  <div className="header__block2">
                    <Link to={"/basket"} className="basket">
                      {basketState.length > 0 && (
                        <span className="basket__number">
                          {basketState.length}
                        </span>
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
                        <Link to={"/product/" + product.id}>
                          {product.text}
                        </Link>
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

            <main className="main center">{children}</main>

            <footer className="footer center">
              <div className="footer__up">
                <div className="footer__up__catalog">
                  <ul>
                    {products.map((product) => (
                      <li key={product.id} className="item__list">
                        <Link to={"/product/" + product.id}>
                          {product.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Exchange />
                <form className="footer__up__contact">
                  <div className="footer__up__contact__text">Написать нам</div>
                  <input
                    className="footer__input"
                    type="text"
                    id="myInput"
                    name="myInput"
                    placeholder="Введите что-то..."
                  ></input>
                  <button className="footer__up__button">Отправить</button>
                </form>
              </div>
              <div className="footer__down">
                <div className="footer__down__left">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="footer__down__rule">
                    (C) все права в конституции
                  </div>
                </div>
                <div className="footer__down__right">
                  <div className="telephone">
                    <FontAwesomeIcon className="pnone__icon" icon={faPhone} />
                    8-800-555-35-35
                  </div>
                  <div className="mail">
                    <FontAwesomeIcon
                      className="pnone__icon"
                      icon={faEnvelope}
                    />
                    netsafe@gmail.com
                  </div>
                  <div className="telegram">
                    {/* <FontAwesomeIcon icon={faTelegram} /> */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </SearchContext.Provider>
      </BasketContext.Provider>
    </UserContext.Provider>
  );
};
