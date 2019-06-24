export default function User() {
    function create() {
        return new Promise((resolve, reject) => {
            console.log("TODO: CREATE USER IN DB");
            return setTimeout(resolve(true), 1000);
        });
    }

    function get(userId) {
        return new Promise((resolve, reject) => {
            console.log("TODO: GET USER FROM DB");
            return setTimeout(resolve(true), 1000);
        });
    }

    return Object.freeze({
        create,
        get
    });
}
