/*Se realiza el import Context para que se pueda manipular el estado desde 
cualquier parte.*/
import React, { createContext, useState } from 'react';
export const CarritoContext = createContext();

/*Encapsulado se hace la implementación de children los cuales son los productos.*/
export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex(p => p.id === producto.id);
      if (index !== -1) {
        const carritoActualizado = [...prevCarrito];
        carritoActualizado[index].cantidad += 1;
        return carritoActualizado;
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  /*Si de un mismo producto tiene más de uno se ira decrementando, pero si de algún producto solo 
  agrego uno se eliminará del carrito, la cantidad ira cambiando al mismo tiempo.
  */
  const eliminarDelCarrito = (idProducto) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.map(producto => {
        if (producto.id === idProducto) {
          if (producto.cantidad > 1) {
            return { ...producto, cantidad: producto.cantidad - 1 };
          } else {
            return null;
          }
        }
        return producto;
      }).filter(Boolean);
    });
  };

  /*Expone agregar al carrito y eliminar del carrito a quien implemente el contexto.*/
  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};




