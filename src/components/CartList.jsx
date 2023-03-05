import ProductCartCard from "./Cards/ProductCartCard";

function Cart({ removeProduct, productosCarrito }) {
  return (
    <>
      {productosCarrito.length === 0 ? (
        <div className="flex justify-center mt-32">
          <img
            className="w-64"
            src="https://svgur.com/i/qo7.svg"
            alt="carrito"
          />
        </div>
      ) : (
        <div className="">
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
        </div>
      )}
    </>
  );
}

export default Cart;
