import React from "react";
import styled from "../utils/styled";
// import { styled } from "@material-ui/styles";

const Div = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const StyledDiv = styled(Div)(theme => ({
    padding: theme.spacing.unit * 3
}));

export default function Content(props) {
    const { children } = props;
    return <StyledDiv>{children}</StyledDiv>;
}
