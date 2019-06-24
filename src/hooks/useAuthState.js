import React from "react";
import { authRef } from "../constants/firebase";

export default function useAuthState() {
    const [authState, setAuthState] = React.useState(
        () => authRef().currentUser
    );

    function onAuthStateChange(state) {
        setAuthState(state);
    }

    React.useEffect(() => {
        const unsubscribe = authRef().onAuthStateChanged(onAuthStateChange);
        return () => unsubscribe();
    }, []);

    return authState;
}
