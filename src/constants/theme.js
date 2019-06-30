import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import cyan from "@material-ui/core/colors/cyan";

const theme = createMuiTheme({
    palette: {
        primary: { main: grey[900] },
        secondary: { main: cyan[500] },
        background: {
            default: "#F6F7FF",
            light: "#F3F5FF"
        }
    },
    typography: {
        useNextVariants: true
    }
});

export default theme;
