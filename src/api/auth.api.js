import { authRef } from "../constants/firebase";

export default function Auth() {
    function createUser() {
        return new Promise((resolve, reject) => {
            console.log("TODO: CREATE USER IN DB");
            return setTimeout(resolve(true), 1000);
        });
    }

    function signUpWithEmailAndPassword({ email, password }) {
        return authRef()
            .createUserWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .then(() => createUser())
            .catch(error => Promise.reject(error));
    }

    function signInWithEmailAndPassword({ email, password }) {
        return authRef()
            .signInWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(error => Promise.reject(error));
    }

    return Object.freeze({
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword
    });
}
