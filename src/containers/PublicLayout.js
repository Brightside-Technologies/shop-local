import React, { Fragment } from "react";
import Footer from "../components/Footer";

export default function Layout(props) {
    const { children } = props;
    return (
        <Fragment>
            <main>{children}</main>
            <Footer />
        </Fragment>
    );
}
