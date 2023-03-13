function ProductCartCard({ product }) {
  return (
    <>
      <div className="flex justify-between  p-2 w-full bg-white hover:bg-red-100 border rounded items-center hover:scale-[101%] transition-all duration-150 cursor-pointer">
        <div className="flex gap-2">
          <img
            className="w-5 mix-blend-multiply object-contain"
            src={product.image}
            alt=""
          />
          <div>
            <h2 className="font-semibold">{product.name}</h2>
          </div>
          <div>
            <h3 className="text-gray-400">${product.unitPrice} c/u</h3>
          </div>
        </div>
        {product.count ? (
          <div className="flex bg-teal-400 rounded-full px-2">
            <h3 className="text-white text-[10px] font-semibold">
              {product.count}
            </h3>
          </div>
        ) : null}
      </div>
      {(product.name === "Papel Higiénico" && product.count === 5) ||
      (product.name === "Alcohol en Gel" && product.count === 5) ? (
        <div className="flex justify-end">
          <h4 className="text-[10px] text-red-700 font-semibold">
            No es posible sumar más cantidad de este producto.
          </h4>
        </div>
      ) : null}
    </>
  );
}

export default ProductCartCard;
