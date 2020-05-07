import React, { useState, useContext } from "react";

import styled from "styled-components";

import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import OrderWrapper from "./OrderWrapper";

import { OrderContext } from "../contexts/OrderContext";

const Container = styled.div`
    margin: 20px 20px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`;

const Header = styled.div`
    border-bottom: 1px solid #000;
`;

const InKitchen = (props) => {
    const [showKitchen, setShowKitchen] = useState(false);

    //destructuring data variables calling the useContext hook
    //and passing the context object
    const { data, orderStatusMap, countKitchenOrders } = useContext(
        OrderContext
    );

    //Return Kitchen Components if showKitchen is true
    function kitchenList() {
        if (showKitchen) {
            return (
                <>
                    {data.orderData.map((order) => {
                        if (orderStatusMap[order.orderId] === 1) {
                            return (
                                <OrderWrapper
                                    key={order.orderId}
                                    order={order}
                                    orderId={order.orderId}
                                    nextStatus={2}
                                />
                            );
                        }
                    })}
                </>
            );
        } else {
            return null;
        }
    }

    //onClick handler to toggle showKitchen
    function handleShowKitchen() {
        setShowKitchen(!showKitchen);
    }

    return (
        <Container>
            <Header onClick={handleShowKitchen}>
                {showKitchen ? <FaAngleDown /> : <FaAngleRight />} In Kitchen (
                {countKitchenOrders()})
            </Header>
            {kitchenList()}
        </Container>
    );
};

export default InKitchen;
