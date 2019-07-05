import React from "react";
import AdminLayout from "../containers/AdminLayout";
import Vendors from "../api/vendors.api";

const vendors = new Vendors();

export default function HomePage() {
    React.useEffect(() => {
        async function getData() {
            // const response = await vendors.getByOwner("236731461922718210");
            // console.log("VENDORS", response);
        }
        getData();
    }, []);
    return (
        <AdminLayout>
            <h1>Home</h1>
        </AdminLayout>
    );
}
