import React from "react";
import { authRef } from "../constants/firebase";

export default function useAuthState() {
    const [authState, setAuthState] = React.useState(() => {
        const authenticatedUser = authRef().currentUser;
        return { initializing: !authenticatedUser, authenticatedUser };
    });
    function onAuthStateChange(authenticatedUser) {
        setAuthState({ initializing: false, authenticatedUser });
    }

    React.useEffect(() => {
        const unsubscribe = authRef().onAuthStateChanged(onAuthStateChange);
        return () => unsubscribe();
    }, []);

    return authState;
}
