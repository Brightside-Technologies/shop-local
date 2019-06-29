import { authRef, firebaseUser } from "../constants/firebase";

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

    function updatePassword(newPassword) {
        return firebaseUser.updatePassword(newPassword);
    }

    return Object.freeze({
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updatePassword
    });
}
