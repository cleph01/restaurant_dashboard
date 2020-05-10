import React, { useState } from "react";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Register from "./components/Register";
import Login from "./components/Login";
import AddMenuItem from "./components/AddMenuItem";

import { Route } from "react-router-dom";

import { OrderContext } from "./contexts/OrderContext";

import { data } from "./data/testData";

import TextCustomerModal from "./components/modals/TextCustomerModal";

function App() {
    //Holds Order Status as orderId:id for moveStatusForward function
    const [orderStatusMap, setOrderStatusMap] = useState({});

    //Holds Modal Visible boolean
    const [textModalVisible, setTextModalVisible] = useState(true);

    //Function passed through context to Move Order
    //Kitchen, Pickup, or Complete
    const moveStatusForward = (orderId, status) => {
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

    //Disply InKitchen Count in OpenOrders Component
    const countOpenOrders = () => {
        let count = data.orderData.length;

        for (let i = 0; i < data.orderData.length; i++) {
            const orderId = data.orderData[i].orderId;

            if (orderStatusMap[orderId]) {
                --count;
            }
        }
        return count;
    };

    //Disply InKitchen Count in InKitchen Component
    const countKitchenOrders = () => {
        let count = 0;

        for (let i = 0; i < data.orderData.length; i++) {
            const orderId = data.orderData[i].orderId;

            if (orderStatusMap[orderId] == 1) {
                ++count;
            }
        }
        return count;
    };

    //Disply Ready for Pickup Count in Header
    const countPickupOrders = () => {
        let count = 0;

        for (let i = 0; i < data.orderData.length; i++) {
            const orderId = data.orderData[i].orderId;

            if (orderStatusMap[orderId] === 2) {
                ++count;
            }
        }
        return count;
    };

    return (
        <>
            <OrderContext.Provider
                value={{
                    data,
                    orderStatusMap,
                    textModalVisible,
                    moveStatusForward,
                    moveStatusBack,
                    countOpenOrders,
                    countKitchenOrders,
                    countPickupOrders,
                    setTextModalVisible,
                }}
            >
                <Route exact path="/" component={Home} />
                <Route path="/chat" component={Chat} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/menu" component={AddMenuItem} />

                {/*textModalVisible && (
                    <TextCustomerModal customerInfo={data.customerInfo} /> */}
            </OrderContext.Provider>
        </>
    );
}

export default App;
