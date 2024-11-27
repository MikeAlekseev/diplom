import { UserContext } from "../../context";
import { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { setUser } from "../util/userLocalStorage";

export function UserAuth() {
  // Получение контекста пользователя (данные о текущем пользователе и функции управления)
  const userContext = useContext(UserContext);
  const [isModelShow, setIsModelShow] = useState(false); // Состояние отображения модального окна
  const loginRef = useRef(); // Референс для поля ввода логина
  const passRef = useRef(); // Референс для поля ввода пароля

  // Если пользователь авторизован, показываем кнопку выхода
  if (userContext.user) {
    return (
      <button
        className="action__btn"
        onClick={() => {
          userContext.setUser(null); // Очистка данных пользователя
          setUser(null); // Обновление состояния (опционально, если используется глобальный стейт)
        }}
      >
        {userContext.user} {/* Отображение имени пользователя */}
      </button>
    );
  }

  // Если пользователь не авторизован, показываем кнопку входа
  return (
    <div>
      <button
        className="action__btn"
        onClick={() => {
          setIsModelShow(!isModelShow); // Переключение отображения модального окна
        }}
      >
        <FontAwesomeIcon icon={faRightToBracket} /> {/* Иконка входа */}
      </button>

      {/* Модальное окно для ввода логина и пароля */}
      {isModelShow && (
        <div className="login">
          <div className="login__input">
            <p>Введите Логин</p>
            <div className="input__folder">
              {/* Поле ввода логина */}
              <input
                className="input__place"
                type="text"
                placeholder="Логин..."
                ref={loginRef}
              ></input>
            </div>
            <p>Введите Пароль</p>
            <div className="input__folder">
              {/* Поле ввода пароля */}
              <input
                className="input__place"
                type="text"
                placeholder="Пароль..."
                ref={passRef}
              ></input>
            </div>

            <div className="button__input">
              {/* Кнопка "Войти" */}
              <button
                className="button__login"
                onClick={() => {
                  const login = loginRef.current.value; // Получение значения логина
                  // const pass = passRef.current.value // Пароль, если понадобится
                  userContext.setUser(login); // Установка имени пользователя в контексте
                  setUser(login); // Локальное обновление (опционально)
                }}
              >
                Войти
              </button>
              {/* Кнопка "Отмена" */}
              <button
                className="button__cancel"
                onClick={() => {
                  setIsModelShow(false); // Скрыть модальное окно
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

