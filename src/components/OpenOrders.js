import React, { useContext } from "react";
import styled from "styled-components";

import { OrderContext } from "../contexts/OrderContext";

import OrderWrapper from "./OrderWrapper";

const Container = styled.div`
    margin: 20px 20px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`;

const Header = styled.div`
    border-bottom: 1px solid #000;
`;

const OpenOrders = () => {
    //destructuring data variables calling the useContext hook
    //and passing the context object
    const { data, orderStatusMap, countOpenOrders } = useContext(OrderContext);

    console.log(orderStatusMap, "Order Status Map");
    return (
        <Container>
            <Header>New Orders ({countOpenOrders()})</Header>
            {data.orderData.map((order) => {
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
