import React, { useState, useContext } from "react";

//Start Components
import Header from "./Header";
import OpenOrders from "./OpenOrders";
import InKitchen from "./InKitchen";
import Ready from "./Pickup";
import Footer from "./Footer";

//End Components

import styled from "styled-components";

import { OrderContext } from "../contexts/OrderContext";

const Container = styled.div`
    background: #ededed;
`;

const Home = () => {
    //Holds show Modal State
    const { textModalVisible } = useContext(OrderContext);

    return (
        <Container>
            <Header />
            <OpenOrders />
            <InKitchen />
            <Ready />
            <Footer />
        </Container>
    );
};

export default Home;
