import Cookies from "js-cookie";

export const signIn = (loginData) => {
  if (loginData) {
    Cookies.set("user", loginData, { expires: 1 });
  }
};

export const isLogedIn = () => {
  return Cookies.get("user");
};

export const isLogedout = () => {
  Cookies.remove("user");
  return Cookies.get("user");
};
