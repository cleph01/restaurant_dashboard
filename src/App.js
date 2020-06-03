import React, { useState } from "react";

import { Redirect } from "react-router";

import Home from "./components/Dashboard";
import Chat from "./components/Chat";

import AddMenuItem from "./components/AddMenuItem";
import AuthPage from "./components/AuthPage";

import { Route } from "react-router-dom";

import { OrderContext } from "./contexts/OrderContext";

import { testData } from "./data/testData";

import TextCustomerModal from "./components/modals/TextCustomerModal";

import { useMutation } from "@apollo/react-hooks";
//Importing GraphQL Query for useMutation API call
import { updateOrderStatusMutation as UPDATE_ORDER_STATUS_MUTATION } from "./graphql/mutations/orders";

import { getBusinessInfoQuery } from "./graphql/queries/business";

function App() {
    //Instantiate useMutation Hook
    const [updateStatus, { loading, error }] = useMutation(
        UPDATE_ORDER_STATUS_MUTATION,
        {
            refetchQueries: [
                { query: getBusinessInfoQuery, variables: { businessId: 1 } },
            ],
            onCompleted(data) {
                console.log(data, "\n Rannnnnnnn update Status");
            },
        }
    );

    //Holds Order Status as orderId:id for moveStatusForward function
    const [orderStatusMap, setOrderStatusMap] = useState({});

    //Holds Modal Visible boolean
    const [textModalVisible, setTextModalVisible] = useState(true);

    //Function passed through context to Move Order
    //Kitchen, Pickup, or Complete
    const moveStatusForward = (orderId, status) => {
        updateStatus({
            variables: { orderId: orderId, status: status },
        });

        setOrderStatusMap({
            ...orderStatusMap,
            [orderId]: status,
        });
    };

    //Function passed through context to Move Order
    //BACK to Kitchen or Open
    const moveStatusBack = (order) => {
        // add the given item to the cart
        setOrderStatusMap({
            ...orderStatusMap,
            [order.id]: order.status - 1,
        });
    };


    
    //Protect Dashboard Route
    const ProtectedDashboardRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("token") ? (
                    <Home {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //Protect Chat Route
    const ProtectedChatRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("token") ? (
                    <Chat {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    //Protect AddMenuItem Route
    const ProtectedMenuRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("token") ? (
                    <AddMenuItem {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    return (
        <>
            <OrderContext.Provider
                value={{
                    testData,
                    orderStatusMap,
                    textModalVisible,
                    moveStatusForward,
                    moveStatusBack,
                    setTextModalVisible,
                }}
            >
                <Route exact path="/" component={AuthPage} />

                <ProtectedDashboardRoute path="/dashboard" component={Home} />

                <ProtectedMenuRoute path="/menu" component={AddMenuItem} />

                <ProtectedMenuRoute path="/chat" component={Chat} />

                {/* <Route path="/chat" component={Chat} />
                <Route path="/menu" component={AddMenuItem} /> */}

                {/*textModalVisible && (
                    <TextCustomerModal customerInfo={data.customerInfo} /> */}
            </OrderContext.Provider>
        </>
    );
}

export default App;
