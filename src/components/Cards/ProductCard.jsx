function ProductCard({ product }) {
  return (
    <div className="flex relative justify-between p-3 h-[100px] w-full bg-white hover:bg-teal-100 border rounded items-center hover:scale-[105%] transition-all duration-150 cursor-pointer">
      <div className="flex gap-2">
        <img
          className="w-12 mix-blend-multiply object-contain"
          src={product.image}
          alt=""
        />
        <div className="ml-2">
          <div>
            <h2 className="font-semibold">{product.name}</h2>
          </div>
          <div>
            <h3 className="text-gray-400">${product.unitPrice} c/u</h3>
          </div>
        </div>
      </div>
      {product.count ? (
        <div className="flex absolute items-center top-2 right-2 bg-teal-400 rounded-full px-2">
          <h3 className="text-white text-[10px] font-semibold">
            {product.count}
          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default ProductCard;
