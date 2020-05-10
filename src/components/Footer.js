import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const Footer = () => {
    return (
        <Container>
            <div style={{ textAlign: "center" }}>
                Copyright © Socialiite {new Date().getFullYear()}
            </div>
        </Container>
    );
};

export default Footer;
