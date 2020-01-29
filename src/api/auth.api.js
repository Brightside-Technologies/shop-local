import { authRef } from "../constants/firebase";

export default function Auth() {
    function signUpWithEmailAndPassword({ email, password }) {
        return authRef()
            .createUserWithEmailAndPassword(email, password)
            .then(response => response)
            .catch(error => Promise.reject(error));
    }

    function signInWithEmailAndPassword({ email, password }) {
        return authRef()
            .signInWithEmailAndPassword(email, password)
            .then(response => response)
            .catch(error => Promise.reject(error));
    }

    function signOut() {
        return authRef().signOut();
    }

    function updatePassword(newPassword) {
        return authRef().currentUser.updatePassword(newPassword);
    }

    function sendEmailVerification() {
        return authRef().currentUser.sendEmailVerification();
    }

    return Object.freeze({
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updatePassword,
        sendEmailVerification
    });
}
