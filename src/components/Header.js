import React, { useContext } from "react";

import { OrderContext } from "../contexts/OrderContext";

import styled from "styled-components";

const Nav = styled.nav`
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

    return (
        <>
            <Nav>
                <h3>Hi, {data.businessInfo.businessName} </h3>
                <h5>
                    New Oders: <NewOrder>{countOpenOrders()}</NewOrder>
                </h5>
                <h5>
                    In Kitchen: <InKitchen>{countKitchenOrders()}</InKitchen>
                </h5>
                <h5>
                    Ready: <PickUp>{countPickupOrders()}</PickUp>
                </h5>
            </Nav>
        </>
    );
};

export default Header;
