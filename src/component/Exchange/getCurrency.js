
export async function getCurrency(){
    const responce = await fetch("https://api.coingecko.com/api/v3/exchange_rates")
    const body = await responce.json()
    const {rub, usd, btc} = body.rates;
    return {
        btc:{
            rub:rub.value,
            usd:usd.value
        },
        rub:{
            btc:1/rub.value,
            usd:usd.value/rub.value
        },
        usd:{
            btc:1/usd.value,
            rub:rub.value/usd.value
        }
    }
}