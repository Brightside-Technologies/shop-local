import { q, client } from "./utils/faunadb";
import getId from "./utils/getId";

exports.handler = (event, context, callback) => {
    console.log("event", event);
    //const id = getId(event.path);
    return client
        .query(
            q.Get(q.Match(q.Index("vendors_by_owner"), "236731461922718210"))
        )
        .then(response => {
            console.log("success", response);
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(response)
            });
        })
        .catch(error => {
            console.log("error", error);
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            });
        });
};
