import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persister } from "./store";

import "./global/global.css";
import "./global/injectFontFamily.css";
import { ModalProvider } from "./layouts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <ModalProvider>
                    <MainRouter />
                </ModalProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
