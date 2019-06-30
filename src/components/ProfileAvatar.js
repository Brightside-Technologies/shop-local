import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useUserContext } from "./UserProvider";

function ProfileAvatar() {
    const userContext = useUserContext();
    console.log("userContext", userContext);

    return <Avatar>AV</Avatar>;
}

export default ProfileAvatar;
