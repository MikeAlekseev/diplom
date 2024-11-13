import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faTelegram } from "@fortawesome/free-solid-svg-icons";
import "./Layout.style.css";
import { useState } from "react";
import { BasketContext, SearchContext, UserContext } from "../../context";
import { getFromBasket } from "../../component/util/basketLocalStorage";
import { Search } from "../../component/Search";
import { UserAuth } from "../../component/UserAuth";
import { getUser } from "../../component/util/userLocalStorage";

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
                    <button className="header__button__catalog">
                      <FontAwesomeIcon icon={faList} />
                      Catalog
                    </button>
                    <Search />
                  </div>
                  <div className="header__block2">
                    <Link to={"/basket"} className="basket">
                      {basketState.length > 0 && (
                        <span className="basket__number">
                          {basketState.length}
                        </span>
                      )}
                      <FontAwesomeIcon icon={faBasketShopping} />
                    </Link>
                    <div className="header__login">
                      
                      <UserAuth />
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__down">
                <ul className="header__down__list">
                  <li>
                    <Link to="#">Ноутбуки</Link>
                  </li>
                  <li>
                    <Link to="#">телефоны</Link>
                  </li>
                  <li>
                    <Link to="#">модемы</Link>
                  </li>
                  <li>
                    <Link to="#">USB/SSD</Link>
                  </li>
                </ul>
                <button className="header__down__link">
                  <Link to="#">ссылка для связи</Link>
                </button>
              </div>
              {/* <ul>
                    <li>
                        <Link to="/">Index</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul> */}
            </header>

            <main className="main center">
              {/* <Slider /> */}
              {children}
            </main>

            <footer className="footer center">
              <div className="footer__up">
                <div className="footer__up__catalog">
                  <ul>
                    <li>
                      <Link to="#">Ноутбуки</Link>
                    </li>
                    <li>
                      <Link to="#">телефоны</Link>
                    </li>
                    <li>
                      <Link to="#">модемы</Link>
                    </li>
                    <li>
                      <Link to="#">USB/SSD</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__up__rules">
                  Правила: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Fugit laudantium eum itaque facere. Nobis, possimus est?
                  Dignissimos labore vel a, ratione repudiandae nulla quod natus
                  voluptas vero culpa facere debitis!
                </div>
                <form className="footer__up__contact">
                  <div className="footer__up__contact__text">Написать нам</div>
                  <input
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
