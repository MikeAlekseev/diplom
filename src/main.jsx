import { createRoot } from 'react-dom/client'
import { App } from './App'
import {getCurrency} from './component/Exchange/getCurrency'


getCurrency().then((currency) => {
    createRoot(document.getElementById('root')).render(<App currency ={currency} />)
});



