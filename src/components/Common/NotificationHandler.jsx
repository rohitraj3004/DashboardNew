import React from "react";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  status200,
  status300,
  status400,
  status401,
  status600,
} from "../../constants";

/*  -------function that handle all type of error and success notifications----*/
function NotificationHandle(
  status,
  message,
  isSuccess,
  isStopRedirectionToLogin,
) {
  let content;
  if (status >= status200 && status < status300 && isSuccess) {
    if (message) {
      toast.success("sucess message ", {
        position: "bottom-center",
        autoClose: 5000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } else {
    if (
      (status >= status400 && status < status600 && status !== status401) ||
      (status >= status200 && status < status300)
    ) {
      content = message;
    } else if (status === status401) {
      if (!isStopRedirectionToLogin) {
        sessionStorage.removeItem("loginInfo"); //    remove stored loggedin user data
        window.location = "login";
      }
    }
    if (content) {
      toast.error(
        <>
          <span className="toast-icon">
            <AiOutlineInfoCircle size={20} />
          </span>{" "}
          <span className="toast-text">{content}</span>
        </>,
        {
          position: "top-right",
          autoClose: 5000,
          transition: Slide,
        },
      );
    }
  }
}

export default NotificationHandle;
