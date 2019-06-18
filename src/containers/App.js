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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home" component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
