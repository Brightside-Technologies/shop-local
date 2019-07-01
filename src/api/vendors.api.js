import faunadb, { query as q } from "faunadb";

function Vendors() {
    const client = new faunadb.Client({
        secret: ""
    });

    function getByUserId(userId) {
        return client.query(
            q.Get(q.Ref(q.Class("vendors"), "235457645364904457"))
        );
    }

    return Object.freeze({
        getByUserId
    });
}

export default Vendors;
