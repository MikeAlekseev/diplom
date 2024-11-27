
export async function getCurrency() {
    // Выполнение HTTP-запроса к API для получения данных о курсах обмена
    const responce = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
  
    // Преобразование ответа в JSON
    const body = await responce.json();
  
    // Извлечение нужных курсов (RUB, USD, BTC) из ответа
    const { rub, usd, btc } = body.rates;
  
    // Возвращаем объект с пересчитанными курсами
    return {
      // Курс BTC относительно RUB и USD
      btc: {
        rub: rub.value, // 1 BTC → RUB
        usd: usd.value  // 1 BTC → USD
      },
      // Курс RUB относительно BTC и USD
      rub: {
        btc: 1 / rub.value,        // 1 RUB → BTC (обратное значение)
        usd: usd.value / rub.value // 1 RUB → USD (через соотношение USD/RUB)
      },
      // Курс USD относительно BTC и RUB
      usd: {
        btc: 1 / usd.value,        // 1 USD → BTC (обратное значение)
        rub: rub.value / usd.value // 1 USD → RUB (через соотношение RUB/USD)
      }
    };
  }
  