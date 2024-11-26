import { createContext } from 'react';

export const BasketContext = createContext({products:[]})

export const SearchContext = createContext({
    search:"",
})

export const UserContext = createContext({
    user:null,
})

export const CurrencyContext = createContext(null);