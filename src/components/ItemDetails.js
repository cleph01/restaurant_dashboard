import React from "react";
import styled from "styled-components";

import AddOns from "./AddOns";

const Container = styled.li`
    border-bottom: 1px solid #000;
    padding-bottom: 6px;
    margin-bottom: 30px;
    border-radius: 5px;
    background: #fff;
`;

const LineItem = styled.p``;

const AddOnLabel = styled.div`
    margin: 10px 0px;
`;

const ItemDetails = (props) => {
    console.log(props, "Item Details");
    return (
        <>
            <Container>
                <LineItem>Item: {props.lineItem.itemName}</LineItem>
                <LineItem>Quantity: {props.lineItem.quantity}</LineItem>
                <LineItem>
                    Special Intrux: {props.lineItem.specialInstructions}
                </LineItem>
                {props.lineItem.addOns.length > 0 && (
                    <AddOnLabel>Add Ons:</AddOnLabel>
                )}
                <ul>
                    {props.lineItem.addOns.map((addOn) => {
                        return <AddOns addOn={addOn} />;
                    })}
                </ul>
            </Container>
        </>
    );
};

export default ItemDetails;
