function Header({ totalPrice }) {
  return (
    <div className="h-[60px] shadow-lg w-full justify-between bg-teal-600 flex items-center text-white px-10">
      <div className="flex items-center gap-3">
        <img
          className="w-9"
          src="https://cdn-icons-png.flaticon.com/512/1159/1159004.png"
          alt=""
        />
        {/*         <h1 className="font-bold text-xl">VerduMarket</h1> */}
      </div>
      <div className="flex content-center items-center gap-3">
        <div className="bg-teal-100 p-2 rounded min-w-[180px] shadow cursor-default">
          <h2 className="text-teal-900 text-center">
            Precio total:{" "}
            <strong className="font-bold">${totalPrice.toFixed(2)}</strong>
          </h2>
        </div>
        <div className="flex justify-center shadow">
          <button className="bg-teal-300 hover:bg-teal-400 translate-all duration-150 text-teal-900 border flex p-2 rounded ">
            Confirmar ✔
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
