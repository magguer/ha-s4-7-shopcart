import { useState } from "react";
import Cart from "./CartList";

function Header({ totalPrice, setShowCart, showCart }) {
  return (
    <>
      <div className="h-[60px] shadow-lg w-full justify-between bg-teal-600 flex items-center text-white px-5 md:px-10">
        <div className="flex items-center gap-3">
          <img
            className="w-9"
            src="https://cdn-icons-png.flaticon.com/512/1159/1159004.png"
            alt=""
          />
          {/*         <h1 className="font-bold text-xl">VerduMarket</h1> */}
        </div>
        <div className="flex content-center items-center gap-3">
          <div
            onClick={() => setShowCart(!showCart)}
            className="bg-teal-100 p-2 rounded min-w-[100px] shadow cursor-pointer"
          >
            <h2 className="text-teal-900 text-center">
              🛒 <strong className="font-bold">${totalPrice.toFixed(2)}</strong>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
