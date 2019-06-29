import React from "react";
import { Redirect } from "react-router-dom";
import useAuthState from "../hooks/useAuthState";
import User from "../api/user.api";

const userApi = new User();

const UserContext = React.createContext(null);

function useUserContext() {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error(`UserContext must be used within a UserProvider`);
    }
    return context;
}

function UserProvider({ children }) {
    const { authenticatedUser, initializing } = useAuthState();
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        async function getUser() {
            const {
                displayName,
                email,
                photoUrl,
                emailVerified,
                uid
            } = authenticatedUser;

            const dbUser = await userApi.get("SOME ID");

            const userObject = {
                displayName,
                email,
                photoUrl,
                emailVerified,
                uid
                // ...dbUser
            };
            setCurrentUser(userObject);
        }
        if (authenticatedUser) {
            getUser();
        } else {
            setCurrentUser(authenticatedUser);
        }
    }, [authenticatedUser]);

    if (!initializing && !authenticatedUser) return <Redirect to="/login" />;

    return (
        <UserContext.Provider
            value={{
                currentUser
            }}>
            {!initializing && children}
        </UserContext.Provider>
    );
}

const UserConsumer = UserContext.Consumer;
export default UserProvider;
export { useUserContext, UserContext, UserConsumer };
