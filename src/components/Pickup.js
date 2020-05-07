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

const PickUp = (props) => {
    //Handles ShowPickup Order Dropdown Toggle
    const [showPickup, setShowPickup] = useState(false);

    //destructuring data variables calling the useContext hook
    //and passing the context object
    const { data, orderStatusMap, countPickupOrders } = useContext(
        OrderContext
    );

    //Return Kitchen Components if showKitchen is true
    function readyList() {
        if (showPickup) {
            return (
                <>
                    <>
                        {data.orderData.map((order) => {
                            if (orderStatusMap[order.orderId] === 2) {
                                return (
                                    <OrderWrapper
                                        key={order.orderId}
                                        order={order}
                                        orderId={order.orderId}
                                        nextStatus={3}
                                    />
                                );
                            }
                        })}
                    </>
                </>
            );
        } else {
            return null;
        }
    }

    //onClick handler to toggle showKitchen
    function handleShowPickup() {
        setShowPickup(!showPickup);
    }

    return (
        <>
            <Container>
                <Header onClick={handleShowPickup}>
                    {showPickup ? <FaAngleDown /> : <FaAngleRight />} Ready For
                    Pickup ({countPickupOrders()})
                </Header>
                {readyList()}
            </Container>
        </>
    );
};

export default PickUp;
