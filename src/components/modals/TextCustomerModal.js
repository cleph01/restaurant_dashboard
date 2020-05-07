import React, { useContext } from "react";
import styled from "styled-components";

import { data } from "../../data/testChat";

import { OrderContext } from "../../contexts/OrderContext";

import { FaTimes, FaUserAstronaut, FaMobileAlt } from "react-icons/fa";

const BackdropStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 50;
`;

const ModalStyle = styled.div`
    background-color: #fff;
    border-radius: 5px;
    width: 350px;
    height: 475px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    position: relative;
`;

const ViewWindow = styled.div`
    background-color: #e1e1e1;
    border-radius: 5px;
    width: 350px;
    height: 475px;
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
    color: #233479;
    width: 40%;
    border: none;
    font-size: 30px;
`;

const CustomerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
`;

const CustomerInfoChild = styled.div`
    display: flex;
`;

const ReplyArea = styled.input.attrs({
    type: "text",
    placeholder: "Type Message Here",
})`
    width: 100%;
    height: 10%;
    ::placeholder {
        font-size: 16px;
        padding-left: 5px;
    }
`;

const SendButton = styled.span`
    margin-top: 5px;
    background-color: #5cb85c;
    font-size: 14px;
    padding: 10px 25px;
    border-radius: 15px;
`;

const TextCustomerModal = (props) => {
    const { textModalVisible, setTextModalVisible } = useContext(OrderContext);

    const onClose = (e) => {
        setTextModalVisible(false);
    };

    const convoDirection = "b2c";

    if (textModalVisible) {
        return (
            <>
                <BackdropStyle>
                    <ModalStyle>
                        <Header>
                            <CustomerInfo>
                                <CustomerInfoChild>
                                    <FaUserAstronaut
                                        style={{ marginRight: "5px" }}
                                    />
                                    <div> {props.customerInfo.firstName}</div>
                                </CustomerInfoChild>
                                <CustomerInfoChild>
                                    <FaMobileAlt
                                        style={{ marginRight: "5px" }}
                                    />
                                    <div> {props.customerInfo.cellPhone}</div>
                                </CustomerInfoChild>
                            </CustomerInfo>
                            <ModalClose>
                                <FaTimes onClick={onClose} />
                            </ModalClose>
                        </Header>

                        <ViewWindow>
                            {data.chat.map((message) => {
                                return (
                                    <>
                                        <div
                                            style={{
                                                textAlign:
                                                    message.direction === "b2c"
                                                        ? "right"
                                                        : "left",

                                                padding: "15px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    backgroundColor:
                                                        message.direction ===
                                                        "b2c"
                                                            ? "#428bca"
                                                            : "#5cb85c",

                                                    borderRadius: "20px",
                                                    padding: "24px 20px",
                                                }}
                                            >
                                                {message.message}
                                            </span>
                                            <div
                                                style={{
                                                    margin: "5px 10px",
                                                    fontSize: "12px",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {message.direction === "b2c"
                                                    ? "- you"
                                                    : "- " +
                                                      props.customerInfo
                                                          .firstName}
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </ViewWindow>
                        <ReplyArea />

                        <SendButton>Send</SendButton>
                    </ModalStyle>
                </BackdropStyle>
            </>
        );
    } else {
        return null;
    }
};

export default TextCustomerModal;
