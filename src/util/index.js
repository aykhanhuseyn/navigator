const baseUrl = "http://waybill.itspro.xyz/api/";
const loginUrl = "auth/login";

export const log_in = async (body) => {
  let response = await fetch(`${baseUrl}${loginUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(body),
  });
  let result = await response.json();
  return result;
};

export const get_waybills = (id = "") => {
  return fetch(`${baseUrl}waybills/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
};

//   WaybillCreate(){
//      async () => {
//     await fetch();
// }
//   }
//   Cars(){
//        async (id = "", headers = {}) => {
//     let response = await fetch(`${baseUrl}waybills/${id}`, {
//       method: "GET",
//       headers: { ...defaultHeaders, ...headers },
//     });
//     return await response.json();
//   }
// }
