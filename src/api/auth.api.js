import { authRef } from "../constants/firebase";

export default function Auth() {
    function signUpWithEmailAndPassword({ email, password }) {
        return authRef()
            .createUserWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(error => Promise.reject(error));
    }

    function signInWithEmailAndPassword({ email, password }) {
        return authRef()
            .signInWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(error => Promise.reject(error));
    }

    function signOut() {
        return authRef().signOut();
    }

    return Object.freeze({
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
    });
}
