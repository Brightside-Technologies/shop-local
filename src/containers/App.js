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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/signup" />
                    </Route>
                    <Route exact path="/signup" component={SignUpPage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
