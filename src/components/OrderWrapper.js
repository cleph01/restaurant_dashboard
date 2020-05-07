import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import styled from "styled-components";

import ItemDetails from "./ItemDetails";

import { OrderContext } from "../contexts/OrderContext";

import {
    FaAngleRight,
    FaAngleDown,
    FaForward,
    FaComments,
} from "react-icons/fa";

const Container = styled.div`
    display: flex;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    background: #e1e1e1;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    width: 100%;
`;

const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
`;

const Details = styled.div`
    margin-top: 5px;
    padding: 10px;
`;

const ActionDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    width: 40%;
`;

const TextButton = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #5cb85c;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
`;

const ChangeStatusButton = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #428bca;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
`;

const OrderWrapper = (props) => {
    const { moveStatusForward, setTextModalVisible } = useContext(OrderContext);

    const [showDetails, setShowDetails] = useState(false);

    //instantiating useHistory Hook to 'push' to chat route
    let history = useHistory();

    //Handle Show Details
    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    };

    //Moves order to next status
    const moveToNext = (nextStatus) => {
        if (nextStatus === 2) {
            return <span>Send To Pickup</span>;
        } else if (nextStatus === 3) {
            return <span>Order Complete</span>;
        } else {
            return <span>Send To Kitchen</span>;
        }
    };

    //Return Kitchen Components if showKitchen is true
    function detailsList() {
        if (showDetails) {
            return (
                <>
                    {props.order.lineItems.map((lineItem) => {
                        return <ItemDetails lineItem={lineItem} />;
                    })}
                </>
            );
        } else {
            return null;
        }
    }

    const pushToChat = () => {
        history.push("/chat");
    };

    console.log(props.order.lineItems, "OrderWrapper");

    return (
        <Container>
            <Wrapper>
                <OrderDetails>
                    <div>Order # {props.orderId}</div>
                    <Details onClick={handleShowDetails}>
                        {showDetails ? <FaAngleDown /> : <FaAngleRight />}
                        Details
                    </Details>
                    <ol>{detailsList()}</ol>
                </OrderDetails>

                <ActionDiv>
                    <TextButton onClick={pushToChat}>
                        <FaComments style={{ marginRight: "5px" }} />
                        Text Customer
                    </TextButton>
                    <ChangeStatusButton
                        onClick={() =>
                            moveStatusForward(props.orderId, props.nextStatus)
                        }
                    >
                        <FaForward style={{ marginRight: "5px" }} />
                        {moveToNext(props.nextStatus)}
                    </ChangeStatusButton>
                </ActionDiv>
            </Wrapper>
        </Container>
    );
};

export default OrderWrapper;
