// upgrade your code, and put your code to change API network, sat!

// const API_BASE_URL_DEV = "http://144.91.77.116:3000";
// const API_BASE_URL_SIT = "http://144.91.77.116:3001";
// const API_BASE_URL_DEV = "https://launchpad-be.nefti.id"; // or use localhost:3737
const API_BASE_URL_DEV = 'http://localhost:1337'; // or use localhost:3737

const ENDPOINT = {
  launchpad: '/api/launchpads',
  tokenInfo: '/api/token-infos',
  chain: '/api/chains',
  upload: '/api/upload',
  populate: 'populate=',
  sortAsc: '&sort[0]=createdAt%3Aasc',
};

let BASE_URL = API_BASE_URL_DEV;

const api = {
  BASE_URL: BASE_URL,
  ENDPOINT: ENDPOINT,
};

export default api;
