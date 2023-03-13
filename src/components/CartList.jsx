import ProductCartCard from "./Cards/ProductCartCard";

function Cart({ removeProduct, productosCarrito, showCart, setShowCart }) {
  return (
    <div className="relative">
      <div
        onClick={() => setShowCart(!showCart)}
        className={` ${
          showCart
            ? "cursor-pointer fixed w-full h-full bg-black z-10 opacity-40 trastion-color duration-300"
            : "fixed w-full h-full bg-black opacity-0 trastion-color duration-300 z-0  "
        }`}
      ></div>
      <div
        className={`${
          showCart
            ? "top-[60px] trasition-all duration-500"
            : "top-[-500px] trasition-all duration-500"
        } min-w-[400px] max-h-[450px] bg-white shadow overflow-y-auto overflow-x-hidden fixed right-0 md:right-10 px-7 py-6 z-10 rounded-b`}
      >
        {productosCarrito.length === 0 ? (
          <div className="flex justify-center my-10">
            <img
              className="w-64"
              src="https://svgur.com/i/qo7.svg"
              alt="carrito"
            />
          </div>
        ) : (
          <div>
            <h2 className="font-semibold text-center text-xl">Tu Carrito 🛒</h2>
            <hr className="my-5" />
            <ul className="grid gap-2">
              {productosCarrito.map((productCart) => {
                return (
                  <li
                    key={productCart.id}
                    onClick={() => removeProduct(productCart)}
                  >
                    <ProductCartCard product={productCart} />
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center mt-5">
              <button className="bg-teal-100 hover:bg-teal-300 translate-all duration-150 text-teal-800 font-semibold border flex px-4 py-2 rounded">
                Confirmar ✔
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
