import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from './page/Layout'
import { RootPage } from './page/RootPage'
import { UserPage } from './page/UserPage'
import { ProductPage } from './page/ProductPage'
import { Basket } from './page/Basket/basket'

export function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<RootPage/>} />
                    <Route path="product/:productId" element={<ProductPage/>} />
                    <Route path="basket" element={<Basket/>} />
                    <Route path="/user" element={<UserPage/>} />
                    <Route path="*" element={<h2>404</h2>} />
                    
                </Routes>
            </Layout>
        </BrowserRouter >
    )
}
