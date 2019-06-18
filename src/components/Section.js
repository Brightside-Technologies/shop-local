import React from "react";
import styled from "../utils/styled";

const BaseSection = ({ className, children }) => (
    <section className={className}>{children}</section>
);

const StyledSection = styled(BaseSection)({
    padding: "3rem 1.5rem"
});

export default function Section(props) {
    const { children } = props;
    return <StyledSection>{children}</StyledSection>;
}
