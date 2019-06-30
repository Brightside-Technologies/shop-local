import React from "react";
import ReactDOM from "react-dom";
// import "./bootstrap";
import Loading from "./components/Loading";
import registerServiceWorker from "./registerServiceWorker";
import "./index.scss";

const App = React.lazy(() => import("./containers/App"));

ReactDOM.render(
    <React.Suspense fallback={<Loading />}>
        <App />
    </React.Suspense>,
    document.getElementById("root")
);
registerServiceWorker();
