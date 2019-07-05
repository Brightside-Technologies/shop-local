import { q, client } from "./utils/faunadb";
import getId from "./utils/getId";

exports.handler = (event, context, callback) => {
    const id = getId(event.path);
    return client
        .query(q.Get(q.Match(q.Ref("indexes/vendors_by_owner"), id)))
        .then(response => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(response)
            });
        })
        .catch(error => {
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            });
        });
};
