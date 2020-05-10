import React from "react";

import styled from "styled-components";

import { FaImage, FaEdit, FaTimes } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 150px;
    margin: 5px 5px;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
`;

const LeftDiv = styled.div`
    padding: 0px 5px;
`;

const MidDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
`;

const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Image = styled.img`
    width: 150px;
    height: 140px;
`;

const EditButton = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #cbb841;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
`;

const DeleteButton = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #cb4154;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
`;

const MenuItem = (props) => {
    return (
        <Container>
            <LeftDiv>
                <h3>{props.item.itemName}</h3>
                <p>
                    <span style={{ fontStyle: "italic" }}>Category</span>:{" "}
                    {props.item.category}
                </p>
                <p>
                    <span style={{ fontStyle: "italic" }}>Description</span>:{" "}
                    {props.item.description}
                </p>
                <p>
                    <span style={{ fontStyle: "italic" }}>Price</span>:{" "}
                    {props.item.price}
                </p>
            </LeftDiv>
            <MidDiv>
                <EditButton>
                    <FaEdit /> Edit
                </EditButton>
                <DeleteButton>
                    <FaTimes /> Delete
                </DeleteButton>
            </MidDiv>
            <RightDiv>
                {props.item.imageURL ? (
                    <Image src={props.item.imageURL} />
                ) : (
                    <FaImage
                        style={{
                            width: "150px",
                            height: "140px",
                            color: "#e1e1e1",
                        }}
                    />
                )}
            </RightDiv>
        </Container>
    );
};

export default MenuItem;
