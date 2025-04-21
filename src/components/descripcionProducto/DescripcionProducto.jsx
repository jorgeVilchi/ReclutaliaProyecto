/*Se realiza el import de los estilos también se hace el import de los hooks context y effect
se importa también el carrito context y por último toast para que las notificaciones 
sean mas amigables para el usuario.
*/

import "./styles.css"
import React, { useContext, useEffect } from 'react';

import { CarritoContext } from '../carrito/carritoContex';

import { toast } from 'react-toastify';


const Secundaria = ({ producto, cerrar }) => {

  const { agregarAlCarrito } = useContext(CarritoContext);

  /*El hook useEfect en este caso lo vamos a utilizar para mostrar el 
  producto sobre los demás productos y si damos el click afuera del modal se va a cerrar.
*/
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        cerrar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cerrar]);

  /*Aquí en sonde implementamos el toast si el producto se agrega de forma correcta se enviará 
  la validación de success de caso contrario se va a mandar el error de una forma un tanto 
  más amigable.
*/
  const manejarAgregar = () => {
    try {
      if (!producto) throw new Error("Producto inválido");

      agregarAlCarrito(producto);
      toast.success(" Producto agregado con éxito");
      cerrar();
    } catch (error) {
      console.error(error);
      toast.error("❌ Ocurrió un error al agregar el producto ❌");
    }
  };

  /*Aquí se muestra la vista completa de la descripción del producto las imágenes 
  imágenes segundarias y por último el botón de agregar para que se agregue al carrito.
*/
  return (

    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Detalle del Producto</h1>
          <button className="cerrar" onClick={cerrar}>×</button>
        </div>

        <section className="imagenes-producto">
          <img src={producto.url} alt="Producto" className="img-principal" />
          <div className="galeria">
            <img src={producto.url2} alt="Vista 1" />
            <img src={producto.url3} alt="Vista 2" />
            <img src={producto.url4} alt="Vista 3" />
          </div>
        </section>

        <section>
          <h2>{producto.nombre}</h2>
          <p className="precio">${producto.precio}</p>
          <p className="descripcion">{producto.descripcion}</p>
          <p><strong>materiales:</strong> {producto.materiales}</p>
          <p><strong>modelo:</strong> {producto.modelo}</p>

          <button className="btn-agregar" onClick={manejarAgregar}>Agregar al carrito</button>

        </section>

      </div>
    </div>

  )
}


export default Secundaria;

