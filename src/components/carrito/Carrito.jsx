/*Se importa los estilos, también se importa el Context para el uso global.*/
/*En el archivo CarritoContex tenemos el estado del carrito.*/

import "./styles.css"
import React, { useContext } from 'react';
import { CarritoContext } from './carritoContex';

const Carrito = () => {
  /*Se accede al array de los productos y al método eliminar del carrito.*/
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  /*Se realiza el cálculo del monto total que se debe de pagar de todos los productos.*/
  const total = carrito.reduce((acc, producto) => {
    const precio = parseFloat(producto.precio) || 0;
    const cantidad = producto.cantidad || 1;
    return acc + (precio * cantidad);
  }, 0);

  /*Esta es la vista que nos muestra el carrito
  Manda al principio la validación para que si no tiene información no se generen errores
  Después de eso si trae información vamos a la parte de recorrer y se realiza el recorrido 
  ya sea de un producto o de varios también se pinta el botón para eliminar productos del carrito
  como al igual el total de la suma del carrito.
*/
  return (
    <div className="div-container">
      <div className="container">
        <div className="cart-header">
          <h1>Listado de tus productos</h1>
          <button className="checkout-button">Comprar</button>
        </div>

        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div className="cart-items">
            {carrito.map((producto, index) => (
              <div className="item">
                <img src={producto.url} alt="Product 2" />
                <div className="info">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                </div>
                <div className="price">${producto.precio}</div>
                <button className="remove-item" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total">
          <div className="total-label">Total: </div>
          <div className="total-price">${total.toFixed(2)}</div>
        </div>
      </div>
    </div>

  )
}

export default Carrito;
