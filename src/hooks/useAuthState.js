import React from "react";
import { authRef } from "../constants/firebase";

export default function useAuthState() {
    const [authState, setAuthState] = React.useState(() => {
        const { currentUser } = authRef();
        return { currentUser, isInitialized: !!currentUser };
    });

    function onAuthStateChange(currentUser) {
        setAuthState({ isInitialized: true, currentUser });
    }

    React.useEffect(() => {
        const unsubscribe = authRef().onAuthStateChanged(onAuthStateChange);
        return () => unsubscribe();
    }, []);

    return authState;
}
