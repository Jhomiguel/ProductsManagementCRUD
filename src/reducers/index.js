import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import alertaReducer from "./alertaReducer";

//Como el store solo puede tomar un reducer, se utiliza CombineReducers para unir todos
//los reducers de la app.
export default combineReducers({
  productos: productosReducer,
  alertas: alertaReducer,
});
