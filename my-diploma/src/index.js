import ReactDOM from "react-dom/client";
import MainLayout from "./router/Layouts/MainLayouts";
import { HashRouter } from "react-router-dom";
import "./index.css";
import Router from "./router/routes";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <Router />
        </MainLayout>
      </PersistGate>
    </Provider>
  </HashRouter>
);
