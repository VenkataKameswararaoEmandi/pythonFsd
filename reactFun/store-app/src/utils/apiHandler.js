// const axios = require("axios");

// export default function MakeRequest(url) {
//   let payload = {
//     method: "",
//     url: url,
//     data: {},
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "content-type": "application/json",
//     },
//   };

//   const requests = {
//     get: async (querryParams) => {
//       try {
//         let finalUrl = querryParams
//           ? `${url}?${Object.keys(querryParams)
//               .map((key) => `${key}=${querryParams[key]}`)
//               .join("&")}`
//           : url;

//         payload.url = finalUrl;
//         payload.method = "get";
//         let result = await axios(payload);
//         return result.data;
//       } catch (error) {
//         console.log(error);
//         return { message: "Something went wrong", code: 600 };
//       }
//     },
//     post: async (body) => {
//       try {
//         let result = await axios.post(url, body);
//         if (result.code >= 200 && result.code <= 299) {
//           return result.data;
//         }
//       } catch (error) {
//         console.log(error);
//         return { message: "Something went wrong", code: 600 };
//       }
//     },
//     put: async (body) => {
//       try {
//         payload.body = JSON.stringify(body);
//         payload.method = "PUT";
//         let result = await fetch(url, payload);
//         if (result.code >= 200 && result.code <= 299) {
//           return result.data;
//         }
//       } catch (error) {
//         console.log(error);
//         return { message: "Something went wrong", code: 600 };
//       }
//     },
//     delete: async (body) => {
//       try {
//         let result = await axios.delete(url);
//         if (result.code >= 200 && result.code <= 299) {
//           return result.data;
//         }
//       } catch (error) {
//         console.log(error);
//         return { message: "Something went wrong", code: 600 };
//       }
//     },
//   };
//   return requests;
// }
import axios from "axios";

export default function MakeRequest(url) {
  let payload = {
    method: "",
    url: url,
    data: {},
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
    },
  };

  const requests = {
    get: async (querryParams) => {
      try {
        let finalUrl = querryParams
          ? `${url}?${Object.keys(querryParams)
              .map((key) => `${key}=${querryParams[key]}`)
              .join("&")}`
          : url;

        return await axios.get(finalUrl);
      } catch (error) {
        console.log(error);
        return { message: "Wrong input", code: 600 };
      }
    },
    post: async (body) => {
      try {
        return await axios.post(url, body);
      } catch (error) {
        console.log(error);
        return { message: "Wrong input", code: 600 };
      }
    },
    put: async (body) => {
      try {
        return await axios.put(url, body);
      } catch (error) {
        console.log(error);
        return { message: error.message, code: 600 };
      }
    },
    delete: async (body) => {
      try {
        return await axios.delete(url);
      } catch (error) {
        console.log(error);
        return { message: "Wrong input", code: 600 };
      }
    },
  };
  return requests;
}
