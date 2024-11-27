import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Exchange } from "../../component/Exchange";
import { products } from "../../data";

export const Footer = () => {
  return (
    <footer className="footer center">
      {/* Верхняя часть футера */}
      <div className="footer__up">
        
        {/* Блок каталога товаров */}
        <div className="footer__up__catalog">
          <ul>
            {/* Отображение списка товаров */}
            {products.map((product) => (
              <li key={product.id} className="item__list">
                {/* Ссылки на страницы товаров */}
                <Link to={"/product/" + product.id}>{product.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Блок обмена валют (компонент Exchange) */}
        <Exchange />

        {/* Форма обратной связи */}
        <form className="footer__up__contact">
          <div className="footer__up__contact__text">Написать нам</div>
          {/* Поле для ввода сообщения */}
          <input
            className="footer__input"
            type="text"
            id="myInput"
            name="myInput"
            placeholder="Введите что-то..."
          ></input>
          {/* Кнопка отправки сообщения */}
          <button className="footer__up__button">Отправить</button>
        </form>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer__down">
        {/* Левая часть нижнего блока */}
        <div className="footer__down__left">
          {/* Логотип */}
          <div className="logo">
            <img src='/img/logo.png' alt="logo" />
          </div>
          {/* Информация о правах */}
          <div className="footer__down__rule">(C) все права в конституции</div>
        </div>

        {/* Правая часть нижнего блока */}
        <div className="footer__down__right">
          {/* Телефонный номер */}
          <div className="telephone">
            <FontAwesomeIcon className="pnone__icon" icon={faPhone} />
            8-800-555-35-35
          </div>
          {/* Электронная почта */}
          <div className="mail">
            <FontAwesomeIcon className="pnone__icon" icon={faEnvelope} />
            netsafe@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

