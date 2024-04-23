import axios from "axios";
import config from "../../src/config/index.js";
export const storeInstance = axios.create({
  baseURL: config.SERVER_URL + "/course",
});
export const mentorInstance = axios.create({
  baseURL: config.SERVER_URL + "/home/mentor",
});
export const parserInstance = axios.create({
  baseURL: config.SERVER_URL + "/home/parser",
});
export const homeInstance = axios.create({
  baseURL: config.SERVER_URL + "/home",
});
export const certificateInstance = axios.create({
  baseURL: config.SERVER_URL + "/certificate",
});
// export const searchInstance = axios.create({
//   baseURL: config.STORE_URL + "/search",
// });
// export const authInstance = axios.create({
//   baseURL: config.SERVER_URL + "/accounts",
// });
// export const usingInstance = axios.create({
//   baseURL: config.SERVER_URL + "/common",
// });
// export const reverseGeocodingInstance = axios.create({
//   baseURL: "https://nominatim.openstreetmap.org",
// });
