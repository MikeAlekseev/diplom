// Ключ для хранения корзины в localStorage
const BASKET_KEY = 'STORE_BASKET'

// Получаем список товаров из localStorage
const goodList = localStorage.getItem(BASKET_KEY)

// Если корзина пуста (товаров нет), создаём пустой массив в localStorage
if (!goodList) {
    localStorage.setItem(BASKET_KEY, JSON.stringify([]))
}

/**
 * Функция для добавления товара в корзину.
 */
export function addToBasket(good) {
    // Получаем текущие товары в корзине
    const goods = getFromBasket()

    // Добавляем новый товар в корзину
    goods.push(good)

    // Записываем обновленную корзину в localStorage
    // В данной версии функция setToBasket используется для записи в localStorage
    setToBasket(goods)
}

/**
 * Функция для получения товаров из корзины.
 */
export function getFromBasket() {
    // Получаем строку JSON из localStorage и преобразуем её в массив
    const goodList = localStorage.getItem(BASKET_KEY)

    return JSON.parse(goodList) // Преобразуем строку JSON в массив
}

/**
 * Функция для удаления товара из корзины.
 */
export function removeFromBasket(id) {
   // Получаем текущие товары из корзины
   const goods = getFromBasket()

   // Фильтруем корзину, удаляя товар с данным ID
   const updatedBasket = goods.filter(productId => productId !== id);
  
   // Записываем обновленную корзину в localStorage
   setToBasket(updatedBasket)
}

/**
 * Функция для записи обновленного списка товаров в корзине в localStorage.
 */
export function setToBasket(goods) {
    // Сохраняем обновленный список товаров в localStorage
    localStorage.setItem(BASKET_KEY, JSON.stringify(goods))
}
