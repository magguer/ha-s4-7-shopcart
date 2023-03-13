import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from "react-toastify";

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

const cartSlice = createSlice({
    name: "Users",
    initialState: [],
    reducers: {
        addProduct(state, action) {
            // Buscamos y creamos una variable del elemento de productosCarrito que coincida con el product de la db.
            const productCart = state.find((item) => item.id === product.id);
            // Nos fijamos si el producto ya se encuentra en productosCarrito
            const itemInTheCart = state.some((p) => p.id === product.id);
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
                    carrito = state.map((item) => {
                        if (item.id === product.id) {
                            return { ...item, count: item.count + 1 };
                        } else {
                            return item;
                        }
                    });
                    setProductosCarrito(carrito);
                    // Calculo Total Carrito
                    let total = 0;
                    carrito.map((singleProduct) => {
                        total += singleProduct.unitPrice * singleProduct.count;
                    });
                    setTotalPrice(total);
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
        },
        removeProduct(state, action) {
            if (productCart.count === 1) {
                productCart.count--;
                setProductosCarrito((oldProducts) => {
                    return oldProducts.filter((rmProduct) => rmProduct !== productCart);
                });
            } else {
                /*  product.count--; */

                const newCart = state.map((item) => {
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
            state.map((singleProduct) => {
                total += singleProduct.unitPrice * singleProduct.count;
            });
            setTotalPrice(total);
        }
    }
})

const { reducer, actions } = cartSlice
export const { addProduct, removeProduct } = actions
export default reducer