import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import theme from "../constants/theme";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Home";
import SignUpPage from "../pages/SignUp";
import LoginPage from "../pages/Login";
import UserProvider from "../components/UserProvider";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUpPage} />
                    <UserProvider>
                        <Route exact path="/home" component={HomePage} />
                    </UserProvider>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
