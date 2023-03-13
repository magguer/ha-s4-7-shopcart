import groceries from "../db";
import ProductCard from "./Cards/ProductCard";

function ProductList({ addProduct }) {
  return (
    /*     Produtos */

    <div className="min-w-[300px] tablet:min-w-[400px]">
      <h2 className="font-semibold text-center text-xl ">Productos 🍉</h2>
      <hr className="my-5" />
      <ul className="grid grid-cols-1 mx-0 lg:mx-10 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {groceries.map((product) => {
          return (
            <li key={product.id} onClick={() => addProduct(product)}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
