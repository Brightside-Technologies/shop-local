import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/styles";

const StyledGridContainer = styled(Grid)({
    height: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
});

function Loader() {
    return (
        <StyledGridContainer container direction="column" justify="center">
            <Grid item container justify="center">
                <Grid item>
                    <CircularProgress
                        size={70}
                        thickness={2.5}
                        color="primary"
                    />
                </Grid>
            </Grid>
        </StyledGridContainer>
    );
}

export default Loader;
