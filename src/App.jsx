import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./page/Layout";
import { RootPage } from "./page/RootPage";
import { ProductPage } from "./page/ProductPage";
import { Basket } from "./page/Basket/Basket";
import { ItemPage } from "./page/ItemPage";
import { CurrencyContext } from "./context";

export function App({ currency }) {
  return (
    <CurrencyContext.Provider value={currency}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="basket" element={<Basket />} />
            <Route path="item/:itemId" element={<ItemPage />} />
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CurrencyContext.Provider>
  );
}
