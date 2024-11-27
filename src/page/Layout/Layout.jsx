import { useState } from "react";
import { BasketContext, SearchContext, UserContext } from "../../context";
import { getFromBasket } from "../../component/util/basketLocalStorage";
import { getUser } from "../../component/util/userLocalStorage";
import { Header } from "../../component/Header/Header";
import { Footer } from "../../component/Footer/Footer";
import "./Layout.style.css";

// Компонент Layout, который оборачивает основную часть приложения,
// предоставляя контексты для корзины, поиска и пользователя
export const Layout = ({ children }) => {
  // Инициализация состояния корзины, поискового запроса и состояния пользователя
  // Данные корзины и пользователя берутся из локального хранилища (или дефолтных значений)
  const [basketState, setBasketState] = useState(getFromBasket());  // Состояние корзины
  const [searchState, setSearchState] = useState("");  // Состояние поискового запроса
  const [userState, setUserState] = useState(getUser());  // Состояние пользователя

  return (
    // Провайдер контекста для пользователя
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      {/* Провайдер контекста для корзины */}
      <BasketContext.Provider
        value={{ products: basketState, addProduct: setBasketState }}
      >
        {/* Провайдер контекста для поискового запроса */}
        <SearchContext.Provider
          value={{ search: searchState, onChange: setSearchState }}
        >
          <div>
            {/* Заголовок приложения, отображающий корзину или другую информацию */}
            <Header basketState={basketState} />
            {/* Основной контент страницы, дочерние компоненты будут отображаться здесь */}
            <main className="main center">{children}</main>
            {/* Нижняя часть страницы с информацией о компании и контактах */}
            <Footer />
          </div>
        </SearchContext.Provider>
      </BasketContext.Provider>
    </UserContext.Provider>
  );
};

