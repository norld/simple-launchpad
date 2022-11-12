const API_BASE_URL_DEV = "https://app.grymore.xyz"; // or use localhost:3737

const ENDPOINT = {
  launchpad: "/api/launchpads",
  tokenInfo: "/api/token-infos",
  chain: "/api/chains",
  upload: "/upload",
  populate: "populate=",
  sortAsc: "&sort[0]=createdAt%3Aasc",
};

let BASE_URL = API_BASE_URL_DEV;

const api = {
  BASE_URL: BASE_URL,
  ENDPOINT: ENDPOINT,
};

export default api;
