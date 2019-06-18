import React from "react";

const AUTHENTICATION_STORAGE_KEY = "AUTHENTICATION_RESPONSE";
const USER_SESSION = "USER_SESSION";

const AuthenticationContext = React.createContext();

function useAuthenticationContext() {
    const context = React.useContext(AuthenticationContext);
    if (!context) {
        throw new Error(
            `AuthenticationContext must be used within a AuthenticationProvider`
        );
    }
    return context;
}

class AuthenticationProvider extends React.Component {
    constructor() {
        super();
        const sessionState = JSON.parse(
            sessionStorage.getItem(AUTHENTICATION_STORAGE_KEY)
        );
        const userSession = JSON.parse(sessionStorage.getItem(USER_SESSION));
        this.state = {
            token: (sessionState && sessionState.token) || "",
            expires: (sessionState && sessionState.expires) || "",
            loginId: (userSession && userSession.loginId) || ""

            // scheme: (sessionState && sessionState.scheme) || ""
        };
    }

    setAuthenticationResponse = response => {
        // store authentication object in state and in persistent storage
        const {
            Data: { Token, Expires }
        } = response;

        return new Promise(resolve => {
            this.setState({ token: Token, expires: Expires }, () => {
                sessionStorage.setItem(
                    AUTHENTICATION_STORAGE_KEY,
                    JSON.stringify({
                        token: Token,
                        expires: Expires
                        // scheme: Scheme
                    })
                );
                resolve();
            });
        });
    };

    setUser = ({ loginId }) => {
        return new Promise(resolve => {
            this.setState({ loginId });
            sessionStorage.setItem(
                USER_SESSION,
                JSON.stringify({
                    loginId
                })
            );
            resolve();
        });
    };

    removeStoredAuthentication = () => {
        return new Promise(resolve => {
            this.setState({ token: "", expires: "" }, () => {
                sessionStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
                resolve();
            });
        });
    };

    removeUserSession = () => {
        return new Promise(resolve => {
            this.setState({ loginId: "" }, () => {
                sessionStorage.removeItem(USER_SESSION);
                resolve();
            });
        });
    };

    rehydrate = () => {
        // restore authentication object from persistent storage
        console.log("rehydrate");
    };

    reset = () => {
        return Promise.all([
            this.removeStoredAuthentication(),
            this.removeUserSession()
        ]);
    };

    render() {
        const { token, expires, loginId } = this.state;
        const { children } = this.props;
        return (
            <AuthenticationContext.Provider
                value={{
                    token,
                    expires,
                    loginId,
                    setAuthenticationResponse: this.setAuthenticationResponse,
                    removeStoredAuthentication: this.removeStoredAuthentication,
                    setUser: this.setUser,
                    removeUserSession: this.removeUserSession,
                    reset: this.reset
                }}>
                {children}
            </AuthenticationContext.Provider>
        );
    }
}

const AuthenticationConsumer = AuthenticationContext.Consumer;
export default AuthenticationProvider;
export {
    useAuthenticationContext,
    AuthenticationContext,
    AuthenticationConsumer
};
