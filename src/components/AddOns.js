import React from "react";
import styled from "styled-components";

const Container = styled.li`
    margin-top: 10px;
    background: #fff;
`;

const Wrapper = styled.li`
    padding-bottom: 6px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fff;
`;

const AddOns = (props) => {
    return (
        <Container>
            <Wrapper>
                <div>Add: {props.addOn.name}</div>
                <div>Quantity: {props.addOn.quantity}</div>
            </Wrapper>
        </Container>
    );
};

export default AddOns;
