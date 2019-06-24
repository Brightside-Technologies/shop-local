import React from "react";
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
    const authState = useAuthState();

    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        async function getUser() {
            const {
                displayName,
                email,
                photoUrl,
                emailVerified,
                uid
            } = authState;

            const dbUser = await userApi.get("SOME ID");

            const userObject = {
                displayName,
                email,
                photoUrl,
                emailVerified,
                uid
            };
            setUser(userObject);
        }
        if (authState) {
            getUser();
        }
    }, [authState]);

    return (
        <UserContext.Provider
            value={{
                user
            }}>
            {children}
        </UserContext.Provider>
    );
}

const UserConsumer = UserContext.Consumer;
export default UserProvider;
export { useUserContext, UserContext, UserConsumer };
