import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./page/Layout";
import { RootPage } from "./page/RootPage";
import { ProductPage } from "./page/ProductPage";
import { Basket } from "./page/Basket/Basket";
import { ItemPage } from "./page/ItemPage";
import { CurrencyContext } from "./context";

// Основной компонент приложения
export function App({ currency }) {
  return (
    // Оборачиваем все приложение в CurrencyContext.Provider,
    // чтобы предоставлять информацию о валюте в дочерних компонентах
    <CurrencyContext.Provider value={currency}>
      
      {/* Используем BrowserRouter для маршрутизации по страницам */}
      <BrowserRouter>
        
        {/* Layout - общий контейнер для всего приложения, включает Header, Footer и основной контент */}
        <Layout>
          
          {/* Настройка маршрутов для различных страниц */}
          <Routes>
            {/* Главная страница приложения */}
            <Route path="/" element={<RootPage />} />
            
            {/* Страница продукта, идентифицируемая по параметру productId */}
            <Route path="product/:productId" element={<ProductPage />} />
            
            {/* Страница корзины */}
            <Route path="basket" element={<Basket />} />
            
            {/* Страница товара, идентифицируемая по параметру itemId */}
            <Route path="item/:itemId" element={<ItemPage />} />
            
            {/* Страница для несуществующих маршрутов (ошибка 404) */}
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CurrencyContext.Provider>
  );
}

