import { useState } from "react";
import { BasketContext, SearchContext, UserContext } from "../../context";
import { getFromBasket } from "../../component/util/basketLocalStorage";
import { getUser } from "../../component/util/userLocalStorage";
import { Header } from "../../component/Header/Header";
import { Footer } from "../../component/Footer/Footer";
import "./Layout.style.css";

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
            <Header basketState={basketState} />
            <main className="main center">{children}</main>
            <Footer />
          </div>
        </SearchContext.Provider>
      </BasketContext.Provider>
    </UserContext.Provider>
  );
};
