const BASKET_KEY = 'STORE_BASKET'
const goodList = localStorage.getItem(BASKET_KEY)

if (!goodList) {
    localStorage.setItem(BASKET_KEY, JSON.stringify([]))
}

export function addToBasket(good) {
    const goods = getFromBasket()

    goods.push(good)

    // localStorage.setItem(BASKET_KEY, JSON.stringify(goods))
    setToBasket(goods)
}

export function getFromBasket() {
    const goodList = localStorage.getItem(BASKET_KEY)

    return JSON.parse(goodList)
}

export function removeFromBasket(id) {
   const goods = getFromBasket()

  
    // Фильтруем корзину, удаляя продукт с данным id
    const updatedBasket = goods.filter(productId => productId !== id);
  
    // Сохраняем обновленную корзину обратно в локальное хранилище
    // localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setToBasket(updatedBasket)
  }

  export function setToBasket(goods){
    localStorage.setItem(BASKET_KEY, JSON.stringify(goods))
  }