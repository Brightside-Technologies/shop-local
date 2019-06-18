import React from "react";
import Loader from "./Loader";

export default function Suspense({ children, fallback }) {
    return (
        <React.Suspense fallback={fallback || <Loader />}>
            {children}
        </React.Suspense>
    );
}
