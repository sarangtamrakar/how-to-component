import { Modern_Antiqua } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";

const LoginformOverlay = () => {
  const [isShow, setisShow] = useState(false);

  const modalRef = useRef();

  function handleShow(e) {
    setisShow(!isShow);
  }

  return (
    <div className="mt-10">
      <button onClick={(e) => handleShow(e)}> Show Login </button>
      
      {isShow && (
        <div className="fixed inset-0 bg-black/50 z-10" ref={modalRef}>
          <div className="relative">
            <button className="absolute right-1 px-3 py-3 rounded bg-red-600" onClick={(e) => setisShow(false)}>Close</button>
            <form className="flex flex-col image-animation justify-center items-center gap-3 z-20">
              <h4 className=""> Overlay Login Form </h4>
              <input
                className="px-10 py-3  bg-gray-200 rounded border-none outline-none"
                type="text"
                placeholder="Enter Username"
              />
              <input
                className="px-10 py-3  bg-gray-200 rounded border-none outline-none"
                type="password"
                placeholder="Enter Password"
              />
              <button className="px-10 py-3 hover:px-14 hover:bg-black hover:text-white transition-all bg-slate-400 rounded">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginformOverlay;
