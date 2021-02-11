import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./app/app.js";
import ApiService from "./services/API-service.js";
import store from "./store";
export const ApiServiceContext = React.createContext();
const apiService = new ApiService();

ReactDOM.render(
    <Provider store={store}>
      <ApiServiceContext.Provider value={apiService}>
        <App />
      </ApiServiceContext.Provider>
    </Provider>,
  document.getElementById("root")
);
