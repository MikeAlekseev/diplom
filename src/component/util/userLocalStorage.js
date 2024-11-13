const USER_KEY = 'STORE_USER'


export function getUser(){
    return localStorage.getItem(USER_KEY) || null;
}

export function setUser(userArg){
    if(userArg){
        localStorage.setItem(USER_KEY, userArg)
    }else{
        localStorage.removeItem(USER_KEY)
    }
}