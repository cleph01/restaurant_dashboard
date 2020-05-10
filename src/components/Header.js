import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import { OrderContext } from "../contexts/OrderContext";

import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const LeftHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const RightHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const NewOrder = styled.span`
    border-radius: 5px;
    padding: 3px 3px;
    background-color: #d9534f;
    color: #fff;
`;

const AddItemButton = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 5px;
    font-size: 15px;
    color: #445a82;
`;

const InKitchen = styled.span`
    border-radius: 5px;
    padding: 3px 3px;
    background-color: #5bc0de;
    color: #fff;
`;

const PickUp = styled.span`
    border-radius: 5px;
    padding: 3px 3px;
    background-color: #5cb85c;
    color: #fff;
`;

const Header = () => {
    //destructuring data variables calling the useContext hook
    //and passing the context object
    const {
        data,
        countOpenOrders,
        countKitchenOrders,
        countPickupOrders,
    } = useContext(OrderContext);

    const history = useHistory();

    return (
        <>
            <Container>
                <LeftHeader>
                    <h3>Hi, {data.businessInfo.businessName} </h3>
                    <h5>
                        New Oders: <NewOrder>{countOpenOrders()}</NewOrder>
                    </h5>
                    <h5>
                        In Kitchen:{" "}
                        <InKitchen>{countKitchenOrders()}</InKitchen>
                    </h5>
                    <h5>
                        Ready: <PickUp>{countPickupOrders()}</PickUp>
                    </h5>
                </LeftHeader>
                <RightHeader>
                    <AddItemButton onClick={() => history.push("/menu")}>
                        <FaPlus style={{ marginRight: "5px" }} />
                        Add Item
                    </AddItemButton>
                </RightHeader>
            </Container>
        </>
    );
};

export default Header;
