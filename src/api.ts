const BASE_URL = `https://api.coinpaprika.com/v1`;

// export function fetchCoins() {
//   return fetch(`${BASE_URL}/coins`).then((response) => response.json());
// }

/**
 * Mock Data
 */
export async function fetchCoins() {
  return fetch(`http://localhost:3000/data/mockFetchCoins.json`, {
    headers: {
      Accept: "application / json",
    },
    method: "GET",
  }).then((response) => response.json());
}

// export function fetchCoinInfo(coinId: string) {
//   return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
//     response.json()
//   );
// }

/**
 * Mock Data
 */
export function fetchCoinInfo(coinId: string) {
  return fetch(`http://localhost:3000/data/mockFetchCoinInfo.json`, {
    headers: {
      Accept: "application / json",
    },
    method: "GET",
  }).then((response) => response.json());
}

// export function fetchCoinTickers(coinId: string) {
//   return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
//     response.json()
//   );
// }

/**
 * Mock Data
 */
export function fetchCoinTickers(coinId: string) {
  return fetch(`http://localhost:3000/data/mockFetchCoinTickers.json`, {
    headers: {
      Accept: "application / json",
    },
    method: "GET",
  }).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId} `
  ).then((response) => response.json());
}
