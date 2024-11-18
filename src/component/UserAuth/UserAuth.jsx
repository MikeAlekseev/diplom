import { UserContext } from "../../context";
import { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { setUser } from "../util/userLocalStorage";

export function UserAuth() {
  const userContext = useContext(UserContext);
  const [isModelShow, setIsModelShow] = useState(false);
  const loginRef = useRef();
  const passRef = useRef();

  if (userContext.user) {
    return (
      <button
        className="action__btn"
        onClick={() => {
          userContext.setUser(null);
          setUser(null);
        }}
      >
        {userContext.user}
      </button>
    );
  }
  return (
    <div>
      <button
        className="action__btn"
        onClick={() => {
          setIsModelShow(!isModelShow);
        }}
      >
        <FontAwesomeIcon icon={faRightToBracket} />
      </button>
      {isModelShow && (
        <div className="login">
          <div className="login__input">
            <p>Введите Логин</p>
            <div className="input__folder">
              <input
                className="input__place"
                type="text"
                placeholder="Логин..."
                ref={loginRef}
              ></input>
              {/* <FontAwesomeIcon icon={faXmark} /> */}
            </div>
            <p>Введите Пароль</p>
            <div className="input__folder">
              <input
                className="input__place"
                type="text"
                placeholder="Пароль..."
                ref={passRef}
              ></input>
              {/* <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {
                  setIsModelShow(false);
                }}
              /> */}
            </div>

            <div className="button__input">
              <button
                className="button__login"
                onClick={() => {
                  const login = loginRef.current.value;
                  // const pass = passRef.current.value
                  userContext.setUser(login);
                  setUser(login);
                }}
              >
                Войти
              </button>
              <button
                className="button__cancel"
                onClick={() => {
                  setIsModelShow(false);
                }}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
