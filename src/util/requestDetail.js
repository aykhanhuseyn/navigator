import deviceInfo from "./device";

const defaultHeaders = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
  Os: deviceInfo.os,
  Browser: deviceInfo.browser,
};

export default defaultHeaders;
