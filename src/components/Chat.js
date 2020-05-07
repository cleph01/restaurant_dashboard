import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { data as chatData } from "../data/testChat";

import { data as orderData } from "../data/testData";

import { twilio } from "../twilio/twilio";

import { OrderContext } from "../contexts/OrderContext";

import {
    FaTimes,
    FaUserAstronaut,
    FaMobileAlt,
    FaBackspace,
} from "react-icons/fa";

const WindowStyle = styled.div`
    width: 97.5%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const ViewWindow = styled.div`
    background-color: #e1e1e1;
    border-radius: 5px;
    width: 99%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: relative;
    overflow: scroll;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
`;

const ModalClose = styled.button`
    text-align: right;
    margin-right: 0.5em;
    color: #233479;
    width: 40%;
    border: none;
    font-size: 30px;
`;

const CustomerInfo = styled.div`
    display: flex;

    align-items: center;
    width: 80%;
    border: none;
`;

const CustomerInfoChild = styled.div`
    display: flex;
    margin-left: 2em;
`;

const Footer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ReplyArea = styled.input.attrs({
    type: "text",
    placeholder: "Type Message Here",
})`
    font-size: 16px;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    ::placeholder {
        font-size: 16px;
        padding-left: 5px;
    }
`;

const SendButton = styled.div`
    color: #fff;
    margin-top: 5px;
    width: 5em;
    background-color: #5cb85c;
    font-size: 14px;
    text-align: center;
    padding: 1em 2em;
    border-radius: 1.25em;
`;

const Chat = () => {
    //instantiating useHistory hook for "close" button
    //to push back to /home
    const history = useHistory();

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSend = (message) => {
        twilio(message);
    };

    console.log(message, "chat message");
    return (
        <>
            <WindowStyle>
                <Header>
                    <CustomerInfo>
                        <CustomerInfoChild>
                            <FaUserAstronaut style={{ marginRight: "5px" }} />
                            <div> {orderData.customerInfo.firstName}</div>
                        </CustomerInfoChild>
                        <CustomerInfoChild>
                            <FaMobileAlt style={{ marginRight: "5px" }} />
                            <div> {orderData.customerInfo.cellPhone}</div>
                        </CustomerInfoChild>
                    </CustomerInfo>
                    <ModalClose>
                        <FaTimes onClick={() => history.push("/")} />
                    </ModalClose>
                </Header>

                <ViewWindow>
                    {chatData.chat.map((message, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    style={{
                                        marginTop: "15px",
                                        textAlign:
                                            message.direction === "b2c"
                                                ? "right"
                                                : "left",

                                        padding: "15px",
                                        borderBottom: "1px dashed #fff",
                                    }}
                                >
                                    <span
                                        style={{
                                            backgroundColor:
                                                message.direction === "b2c"
                                                    ? "#428bca"
                                                    : "#5cb85c",

                                            borderRadius: "20px",
                                            padding: "24px 20px",
                                            color: "#fff",
                                        }}
                                    >
                                        {message.message}
                                    </span>
                                    <div
                                        style={{
                                            margin: "5px 15px 0px 10px",
                                            fontSize: "12px",
                                            fontStyle: "italic",
                                            color: "#fff",
                                        }}
                                    >
                                        {message.direction === "b2c"
                                            ? "- you"
                                            : "- " +
                                              orderData.customerInfo.firstName}
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </ViewWindow>
                <Footer>
                    <ReplyArea onChange={handleChange} />

                    <SendButton onClick={() => handleSend(message)}>
                        Send
                    </SendButton>
                </Footer>
            </WindowStyle>
        </>
    );
};

export default Chat;
