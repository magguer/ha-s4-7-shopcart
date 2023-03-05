import { useState } from "react";
import "./App.css";
import Cart from "./components/CartList";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productosCarrito, setProductosCarrito] = useState([]);
  let carrito = [...productosCarrito];

  // Toast FX
  const noMoreProductToast = () => {
    return toast.info("No es posible sumar más cantidad de este producto.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addProductToast = () => {
    return toast("Producto agregado al carrito.", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Agregar productos al Carrito
  const addProduct = (product) => {
    // Buscamos y creamos una variable del elemento de productosCarrito que coincida con el product de la db.
    const productCart = productosCarrito.find((item) => item.id === product.id);
    // Nos fijamos si el producto ya se encuentra en productosCarrito
    const itemInTheCart = productosCarrito.some((p) => p.id === product.id);
    if (itemInTheCart) {
      // Si se encuentra, comprobamos lo siguiente:
      if (
        (productCart.name === "Papel Higiénico" && productCart.count === 5) ||
        (productCart.name === "Alcohol en Gel" && productCart.count === 5)
      ) {
        // Si sucede, lanzamos un Toast advirtiendo "No es posible sumar más cantidad de este producto."
        return noMoreProductToast();
      } else {
        // Si no sucede, le sumamos a nuestro producto un +1 a su clave "count"
        const newCart = productosCarrito.map((item) => {
          if (item.id === product.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
        setProductosCarrito(newCart);
      }
    } else {
      // En caso de no existir el producto en productosCarrito, lo agregamos, avisando con un Toast.
      addProductToast();
      carrito = [...carrito, { ...product, count: 1 }];
      setProductosCarrito(carrito);
    }
    // Calculo Total Carrito
    let total = 0;
    carrito.map((singleProduct) => {
      total += singleProduct.unitPrice * singleProduct.count;
    });
    setTotalPrice(total);
  };

  // Eliminar productos del Carrito
  const removeProduct = (productCart) => {
    if (productCart.count === 1) {
      productCart.count--;
      setProductosCarrito((oldProducts) => {
        return oldProducts.filter((rmProduct) => rmProduct !== productCart);
      });
    } else {
      /*  product.count--; */

      const newCart = productosCarrito.map((item) => {
        if (item.id === productCart.id) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
      setProductosCarrito(newCart);
    }
    // Calculo Total Carrito
    let total = 0;
    productosCarrito.map((singleProduct) => {
      total += singleProduct.unitPrice * singleProduct.count;
    });
    setTotalPrice(total);
  };

  return (
    <div className="relative">
      {/*       Heder */}
      <div className="fixed bg-teal-600 z-10 w-full top-0 shadow">
        <Header totalPrice={totalPrice} />
      </div>
      {/*       Toast Container */}

      {/*     Shop */}
      <div className="pt-[60px] flex">
        <div className="relative flex gap-3 py-6">
          <ProductList
            productosCarrito={productosCarrito}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            addProduct={addProduct}
          />
        </div>
        <div className="min-w-[400px]  lg:min-w-[500px] top-[60px] bottom-0 overflow-y-auto overflow-x-hidden fixed right-20  lg:right-14 px-3 py-6">
          <Cart
            productosCarrito={productosCarrito}
            removeProduct={removeProduct}
          />
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
