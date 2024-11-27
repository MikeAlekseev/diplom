// Ключ для хранения данных пользователя в localStorage
const USER_KEY = 'STORE_USER'

/**
 * Функция для получения данных о пользователе из localStorage.
 * Если данных нет, возвращается null.
 * Имя пользователя, если оно есть в localStorage, иначе null.
 */
export function getUser(){
    // Получаем значение из localStorage по ключу USER_KEY. Если оно отсутствует, возвращаем null.
    return localStorage.getItem(USER_KEY) || null;
}

/**
 * Функция для сохранения или удаления данных о пользователе в localStorage.
 * Если передан аргумент userArg, данные о пользователе сохраняются.
 * Если аргумент равен null или undefined, данные удаляются из localStorage.
 * userArg - Имя пользователя, которое сохраняется в localStorage.
 */
export function setUser(userArg){
    if(userArg){
        // Если userArg задан, сохраняем данные о пользователе в localStorage
        localStorage.setItem(USER_KEY, userArg)
    }else{
        // Если userArg равен null или undefined, удаляем данные о пользователе из localStorage
        localStorage.removeItem(USER_KEY)
    }
}
