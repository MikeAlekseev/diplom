import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Exchange } from "../../component/Exchange";
import { products } from "../../data";

export const Footer = () => {
  return (
    <footer className="footer center">
      <div className="footer__up">
        <div className="footer__up__catalog">
          <ul>
            {products.map((product) => (
              <li key={product.id} className="item__list">
                <Link to={"/product/" + product.id}>{product.text}</Link>
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
          <img src='/img/logo.png' alt="logo" />
          </div>
          <div className="footer__down__rule">(C) все права в конституции</div>
        </div>
        <div className="footer__down__right">
          <div className="telephone">
            <FontAwesomeIcon className="pnone__icon" icon={faPhone} />
            8-800-555-35-35
          </div>
          <div className="mail">
            <FontAwesomeIcon className="pnone__icon" icon={faEnvelope} />
            netsafe@gmail.com
          </div>
          <div className="telegram">{/* Telegram icon can go here */}</div>
        </div>
      </div>
    </footer>
  );
};
