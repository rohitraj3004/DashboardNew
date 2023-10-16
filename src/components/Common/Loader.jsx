import React from "react";
// import { useSelector, shallowEqual } from "react-redux";
import Loader from "react-spinners/FadeLoader";

function GlobalLoader() {
  return (
    <div className="fixed z-[1060] w-[100vw] h-[100vh] bg-transparent opacity-[0.5]">
      <div className="w-[200px] h-[600px] absolute mt-[250px] mx-auto max-[100%] overflow-auto z-[9999] flex items-center">
        <Loader color="#0E48EB" margin={2} size={20} />
      </div>
    </div>
  );
}

export default GlobalLoader;
