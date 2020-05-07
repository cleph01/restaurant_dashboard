import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    height: 100%;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const Footer = () => {
    return (
        <Container>
            <div>Footer</div>
        </Container>
    );
};

export default Footer;
