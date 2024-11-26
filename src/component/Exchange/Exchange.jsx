import { useState, useRef, useEffect, useContext } from "react";
import { CurrencyContext } from "../../context";
import "../../page/Layout/Layout.style.css";


export function Exchange() {
  const rubRef = useRef(null);
  const btcRef = useRef(null);
  const usdRef = useRef(null);
  const [rub, setRub] = useState(0);
  const [btc, setBtc] = useState(0);
  const [usd, setUsd] = useState(0);
  const currency = useContext(CurrencyContext);
  useEffect(() => {
    rubRef.current.value = rub.toString();
  }, [rub]);
  useEffect(() => {
    btcRef.current.value = btc.toString();
  }, [btc]);
  useEffect(() => {
    usdRef.current.value = usd.toString();
  }, [usd]);

  return (
    <div className="footer__up__rules">
      <div className="rub__change">
        <label>RUB</label>
        <input
          type="text"
          id="rub"
          ref={rubRef}
          onChange={(e) => {
            const num = Number(e.target.value);
            if (!isNaN(num)) {
              setRub(num);
              setBtc(num * currency.rub.btc);
              setUsd(num * currency.rub.usd);
            }
          }}
        />
      </div>
      <div className="btc__change">
        <label>BTC</label>
        <input
          type="text"
          id="btc"
          ref={btcRef}
          onChange={(e) => {
            const num = Number(e.target.value);
            if (!isNaN(num)) {
              setBtc(num);
              setRub(num * currency.btc.rub);
              setUsd(num * currency.btc.usd);
            }
          }}
        />
      </div>
      <div className="usd__change">
        <label>USD</label>
        <input
          type="text"
          id="usd"
          ref={usdRef}
          onChange={(e) => {
            const num = Number(e.target.value);
            if (!isNaN(num)) {
              setUsd(num);
              setBtc(num*currency.usd.btc);
              setRub(num * currency.usd.rub);
            }
          }}
        />
      </div>
    </div>
  );
}
