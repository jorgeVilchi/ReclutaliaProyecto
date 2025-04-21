/*Se realiza la importación de los estilos la data que es donde se guardó la información de los 
productos, también se hace la implementación de la descripción de producto y el hook para el estado.*/
import "./styles.css"
import { productos } from './data';
import VentanaProducto from '../../components/descripcionProducto/DescripcionProducto';
import React, { useState } from 'react';

const Principal = () => {
  /*Guardamos el producto seleccionado, pero empieza en null*/
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  /*Se ejecuta esta función al momento de dar click en el botón de revisar busca el producto 
  por identificador y posterior a ello se asigna a producto.
  */
  const manejarClick = (id) => {
    const producto = productos.find(u => u.id === id);
    setProductoSeleccionado(producto);
  };
  /*Se realiza el map junto con la arrow function para que realice el recorrido de los 
  productos y se muestren, también se agrega el botón de revisar el cual posterior mente apoyara 
  para revisar y si se quiere agregar al carrito.
  */

  /*se pasa el producto seleccionado y también la parte de cerrar por si no se quiere ver más el producto
  o seleccionar otro producto.
  */

  return (
    <><main>
      <section className="products">

        {productos.map(producto => (

          <article className="product" key={producto.id}>
            <img src={producto.url} alt="Producto 6" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p className="product-item">${producto.precio}</p>
            <p className="product-item">{producto.materiales}</p>
            <p className="product-item">{producto.modelo}</p>
            <button onClick={() => manejarClick(producto.id)}>Revisar</button>
          </article>

        ))}
        {productoSeleccionado && (
          <VentanaProducto producto={productoSeleccionado} cerrar={() => setProductoSeleccionado(null)} />
        )}

      </section>
    </main>
    </>

  )
}

export default Principal;

