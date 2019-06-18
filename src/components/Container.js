import React from "react";
import styled from "../utils/styled";
// import { styled } from "@material-ui/styles";

const Div = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const StyledDiv = styled(Div)(theme => ({
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
        maxWidth: 960,
        width: 960
    },
    [theme.breakpoints.up("lg")]: {
        maxWidth: 1152,
        width: 1152
    },
    [theme.breakpoints.up("xl")]: {
        maxWidth: 1344,
        width: 1344
    }
}));

export default function Container(props) {
    const { children } = props;
    return <StyledDiv>{children}</StyledDiv>;
}
