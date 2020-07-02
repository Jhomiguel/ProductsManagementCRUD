import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//muestra una alerta
export function mostrarAlertaAction(alerta) {
  return (dispatch) => {
    dispatch(mostrarAlerta(alerta));
  };
}
const mostrarAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

//Oculta la alerta
export function ocultarAlertaAction() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(ocultarAlerta(null));
    }, 3000);
  };
}
const ocultarAlerta = (estado) => ({
  type: OCULTAR_ALERTA,
  payload: estado,
});
