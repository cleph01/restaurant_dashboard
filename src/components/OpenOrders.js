import React, { useContext } from "react";
import styled from "styled-components";

import { OrderContext } from "../contexts/OrderContext";

import OrderWrapper from "./OrderWrapper";

import countOpenOrders from "../helper_functions/openOrdersFunction";

const Container = styled.div`
    margin: 20px 20px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`;

const Header = styled.div`
    border-bottom: 1px solid #000;
`;

const OpenOrders = (props) => {
    //destructuring orderStatusMap variables calling the useContext hook
    const { orderStatusMap } = useContext(OrderContext);

    
    return (
        <Container>
            <Header>
                New Orders ({countOpenOrders(props.orders, orderStatusMap)})
            </Header>
            {props.orders.map((order) => {
                if (!orderStatusMap[order.orderId]) {
                    return (
                        <OrderWrapper
                            key={order.orderId}
                            orderId={order.orderId}
                            order={order}
                            nextStatus={1}
                        />
                    );
                }
            })}
        </Container>
    );
};

export default OpenOrders;
