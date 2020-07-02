import { createStore, applyMiddleware, compose } from "redux";
//Thunk: variacion de redux que permite funciones asyncronas.
import thunk from "redux-thunk";

import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    //Se utiliza para poder utilizar el Middleware de thunk
    applyMiddleware(thunk),

    //Para que no muestre error en caso de que un navegador no soporte Redux Dev Tools
    typeof window === "object" &&
      //Habilitar Redux dev Tools Extension
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
