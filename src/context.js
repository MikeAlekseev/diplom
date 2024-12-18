import { createContext } from 'react';

// Создаем контекст для корзины. По умолчанию корзина пустая (пустой массив продуктов).
// Этот контекст будет использоваться для управления и доступа к данным корзины (например, список товаров).
export const BasketContext = createContext({ products: [] });

// Создаем контекст для поиска. По умолчанию строка поиска пустая.
// Этот контекст будет использоваться для хранения и обновления значения поискового запроса.
export const SearchContext = createContext({
  search: "", // Значение по умолчанию для поисковой строки
});

// Создаем контекст для пользователя. По умолчанию пользователь отсутствует (null).
// Этот контекст будет использоваться для управления состоянием пользователя (например, информация о том, вошел ли пользователь).
export const UserContext = createContext({
  user: null, // Значение по умолчанию - отсутствующий пользователь
});

// Создаем контекст для валюты. По умолчанию значение равно null.
// Этот контекст будет использоваться для передачи данных о текущей валюте (например, обменных курсах).
export const CurrencyContext = createContext(null);
