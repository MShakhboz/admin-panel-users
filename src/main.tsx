import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./router";

import "./global/global.css";
import "./global/injectFontFamily.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>
);
