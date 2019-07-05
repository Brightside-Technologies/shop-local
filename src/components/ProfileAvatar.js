import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import { useUserContext } from "./UserProvider";

const useStyles = makeStyles({
    avatar: {
        width: 64,
        height: 64,
        fontSize: "1.5rem",
        margin: 10
    }
});

function ProfileAvatar({ isSidebarOpen }) {
    const classes = useStyles();
    const userContext = useUserContext();
    const { currentUser } = userContext;

    const [initials, setInitials] = React.useState(null);
    const [displayName, setDisplayName] = React.useState(null);
    React.useEffect(() => {
        if (currentUser) {
            const { displayName: displayCurrentUserName } = currentUser;
            const splitDisplayName = displayCurrentUserName.split(" ");
            const displayInitials = `${splitDisplayName[0][0]}${
                splitDisplayName[splitDisplayName.length - 1][0]
            }`;
            setInitials(displayInitials);
            setDisplayName(displayCurrentUserName);
        }
    }, [currentUser]);

    return (
        initials && (
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column">
                <Avatar className={classes.avatar}>{initials}</Avatar>
                <Fade in={isSidebarOpen}>
                    <Typography variant="overline">{displayName}</Typography>
                </Fade>
            </Grid>
        )
    );
}

export default ProfileAvatar;
