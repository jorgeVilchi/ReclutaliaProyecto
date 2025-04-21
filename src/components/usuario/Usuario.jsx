/*Se realiza la importación de los estilos también hacemos la importación 
del hook state para manejar el estado del formulario.
*/
import "./styles.css"
import React, { useState } from "react";

/*Se definen los estados de los componentes para posterior uso en el formulario.*/
/*Se define manejarCambio que se implementa para que cuando se seleccione un país 
este lo interprete.
*/
/*Se define una lista de estados.*/
/*Se guardan los datos y posterior a ello se hace el llamado de la información guardada.*/
const FormularioUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [pais, setPais] = useState("");


  const manejarCambio = (e) => {
    setPais(e.target.value);
  };

  const [datosGuardados, setDatosGuardados] = useState(null);
  const items = ["Selecciona tu país", "Alemania", "Bahrein", "China", "Djibouti", "Egipto", "Finlandia"
    , "Liberia", "México", "Panamá", "República Democrática del Congo", "Tonga", "Vanuatu", "Zimbabwe"];

  const guardarDatos = () => {
    const datos = { nombre, correo, telefono, direccion, ciudad, codigoPostal, pais };
    localStorage.setItem("usuario", JSON.stringify(datos));
    alert("Datos guardados correctamente");
  };

  const cargarDatos = () => {
    const datos = JSON.parse(localStorage.getItem("usuario"));
    if (datos) {
      setNombre(datos.nombre);
      setCorreo(datos.correo);
      setTelefono(datos.telefono);
      setDireccion(datos.direccion);
      setCiudad(datos.ciudad);
      setCodigoPostal(datos.codigoPostal);
      setPais(datos.pais);

      setDatosGuardados(datos);
    } else {
      alert("No hay datos guardados");
    }
  };

  return (
    <div className="checkout-form">
      <h1>Datos personales</h1>
      <div>
        <label htmlFor="nombre">Nombre completo</label>
        <input type="text" id="nombre" name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} placeholder="Jose Manuel Hernandez Hernandez" required />

        <label htmlFor="correo">Email</label>
        <input type="email" id="correo" name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)} placeholder="JoseManuel1998@gmail.com" required />

        <label htmlFor="telefono">Numero de celular</label>
        <input type="tel" id="telefono" name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)} placeholder="555 555 555 55" />

        <label htmlFor="direccion">Dirección de envió</label>
        <textarea id="direccion" name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)} placeholder="Calle Reforma 123, Interior 4  
                                                            Colonia Centro  
                                                            Delegación Cuauhtémoc  
                                                            Ciudad de México, CDMX 06000  
                                                            México  " required></textarea>

        <label htmlFor="ciudad">Ciudad</label>
        <input type="text" id="ciudad" name="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)} placeholder="Ciudad de México" required />

        <label htmlFor="codigoPostal">Código Postal</label>
        <input type="text" id="codigoPostal" name="codigoPostal"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)} placeholder="06000" required />

        <select id="pais" name="pais" onChange={manejarCambio}>
          {
            items.map((item, index) => (
              <option key={index}
                value={item}>{item}</option>
            ))
          }
        </select>

        <button onClick={guardarDatos} >
          Guardar
        </button>
        <br />

        <button onClick={cargarDatos} >
          Revisar mi informacion personal
        </button>

        {datosGuardados && (
          <div >
            <p><strong>Nombre:</strong> {datosGuardados.nombre}</p>
            <p><strong>Correo:</strong> {datosGuardados.correo}</p>
            <p><strong>Telefono:</strong> {datosGuardados.telefono}</p>
            <p><strong>Direccion:</strong> {datosGuardados.direccion}</p>
            <p><strong>Ciudad:</strong> {datosGuardados.ciudad}</p>
            <p><strong>Codigo Postal:</strong> {datosGuardados.codigoPostal}</p>
            <p><strong>Pais:</strong> {datosGuardados.pais}</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default FormularioUsuario;


