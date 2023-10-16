// import axios from "axios";
import NotificationHandle from "./NotificationHandler";
import checkHttpStatus from "../../store/apiUtils/index";
// import { startLoader, stopLoader } from "../../store/actions";
// import store from "../../store";
// import { AXIOS_INSTANCE } from "../../store/apiUtils/config";

/**
 * httpservice url
//  * @returns {*}
 */
// export const httpServiceUrl = axios.create({
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
// });

// httpServiceUrl.defaults.withCredentials = true;
// // Add a request interceptor
// AXIOS_INSTANCE.interceptors.request.use(
//   function loaderStart(config) {
//     store.dispatch(startLoader());
//     return config;
//   },
//   function loaderStart(error) {
//     return Promise.reject(error);
//   },
// );

// // Add a response interceptor
// AXIOS_INSTANCE.interceptors.response.use(
//   function loaderStop(response) {
//     store.dispatch(stopLoader());
//     return response;
//   },
//   function loaderStop(error) {
//     store.dispatch(stopLoader());
//     return Promise.reject(error);
//   },
// );

async function baseMethod(
  serviceMethod,
  successMsg,
  errorMsg,
  isStopRedirectionToLogin,
) {
  return serviceMethod
    .then(checkHttpStatus)
    .then((response) => {
      if (response?.data?.isSuccess) {
        NotificationHandle(200, successMsg, response?.data?.isSuccess);
      } else {
        NotificationHandle(
          response.data?.error?.error,
          errorMsg || response.data.error?.errorDescription,
          response?.data?.isSuccess,
          isStopRedirectionToLogin,
        );
      }

      return response;
    })
    .catch((err) => {
      if (err.response) {
        NotificationHandle(
          err.response.data.status,
          err.response.data.detail,
          err.response?.data?.isSuccess,
        );
      }
      return err.response;
    });
}

export default baseMethod;
