import { createRoot } from 'react-dom/client'
import { App } from './App'
import {getCurrency} from './component/Exchange/getCurrency'


// Получаем данные о валютных курсах с помощью асинхронной функции getCurrency
getCurrency().then((currency) => {
    // После получения данных, рендерим компонент App и передаем данные о валюте в пропс currency
    // Это позволяет компонентам, использующим CurrencyContext, получить доступ к этим данным
    createRoot(document.getElementById('root')).render(<App currency={currency} />);
});




