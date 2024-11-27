import { useContext } from "react";
import { SearchContext } from "../../context";
import "./Search.style.css";

export function Search({}) {
  // Получение контекста поиска (объект с функцией управления поисковым состоянием)
  const search = useContext(SearchContext);

  return (
    <div className="header__search">
      {/* Поле ввода для поиска */}
      <input
        type="text"
        id="myInput"
        name="myInput"
        placeholder="Поиск..." // Подсказка в поле ввода
        onChange={(e) => {
          // Обновление значения поиска при изменении текста
          search.onChange(e.target.value);
        }}
      ></input>
    </div>
  );
}

