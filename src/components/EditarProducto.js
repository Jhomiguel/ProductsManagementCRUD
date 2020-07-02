import React, { useState, useEffect } from "react";
//Redux stuff
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productosActions";
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../actions/alertasActions";
//Router Stuff
import { useHistory } from "react-router-dom";

const EditarProducto = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //Nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: 0,
  });

  //producto a editar
  const productoeditar = useSelector((state) => state.productos.productoeditar);

  //Extraer state del store
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);
  const alerta = useSelector((state) => state.alertas.alerta);
  //Llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  if (!productoeditar) return null;
  //Leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer valores de producto
  const { nombre, precio } = producto;

  //Cuando se guardaden Cambios
  const submitEditarProducto = (e) => {
    e.preventDefault();
    //Validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        msg: "Todos los campos son obligatorios",
        clases: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarAlertaAction(alerta));
      dispatch(ocultarAlertaAction());
      return;
    }

    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            {alerta ? <p className={alerta.clases}>{alerta.msg}</p> : null}
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Pruducto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Pruducto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
