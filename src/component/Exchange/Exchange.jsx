import { useState, useRef, useEffect, useContext } from "react";
import { CurrencyContext } from "../../context";
import "../../page/Layout/Layout.style.css";


export function Exchange() {
  // Ссылки на элементы input для управления их значениями напрямую
  const rubRef = useRef(null);
  const btcRef = useRef(null);
  const usdRef = useRef(null);

  // Состояние для хранения значений RUB, BTC, USD
  const [rub, setRub] = useState(0);
  const [btc, setBtc] = useState(0);
  const [usd, setUsd] = useState(0);

  // Получение текущих курсов валют через контекст
  const currency = useContext(CurrencyContext);

  // Эффекты для синхронизации значений input с состоянием
  useEffect(() => {
    rubRef.current.value = rub.toString(); // Устанавливает значение поля RUB
  }, [rub]);

  useEffect(() => {
    btcRef.current.value = btc.toString(); // Устанавливает значение поля BTC
  }, [btc]);

  useEffect(() => {
    usdRef.current.value = usd.toString(); // Устанавливает значение поля USD
  }, [usd]);

  return (
    <div className="footer__up__rules">
      {/* Блок для ввода RUB */}
      <div className="rub__change">
        <label>RUB</label>
        <input
          type="text"
          id="rub"
          ref={rubRef} // Привязка к useRef
          onChange={(e) => {
            const num = Number(e.target.value); // Преобразование значения в число
            if (!isNaN(num)) {
              setRub(num); // Обновление состояния RUB
              setBtc(num * currency.rub.btc); // Пересчет BTC
              setUsd(num * currency.rub.usd); // Пересчет USD
            }
          }}
        />
      </div>

      {/* Блок для ввода BTC */}
      <div className="btc__change">
        <label>BTC</label>
        <input
          type="text"
          id="btc"
          ref={btcRef} // Привязка к useRef
          onChange={(e) => {
            const num = Number(e.target.value); // Преобразование значения в число
            if (!isNaN(num)) {
              setBtc(num); // Обновление состояния BTC
              setRub(num * currency.btc.rub); // Пересчет RUB
              setUsd(num * currency.btc.usd); // Пересчет USD
            }
          }}
        />
      </div>

      {/* Блок для ввода USD */}
      <div className="usd__change">
        <label>USD</label>
        <input
          type="text"
          id="usd"
          ref={usdRef} // Привязка к useRef
          onChange={(e) => {
            const num = Number(e.target.value); // Преобразование значения в число
            if (!isNaN(num)) {
              setUsd(num); // Обновление состояния USD
              setBtc(num * currency.usd.btc); // Пересчет BTC
              setRub(num * currency.usd.rub); // Пересчет RUB
            }
          }}
        />
      </div>
    </div>
  );
}

