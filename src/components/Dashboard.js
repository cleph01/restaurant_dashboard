import React from "react";

//Start Components
import Header from "./Header";
import OpenOrders from "./OpenOrders";
import InKitchen from "./InKitchen";
import Ready from "./Pickup";
import Footer from "./Footer";
//End Components

//Apollo useMutation Hook for API call
import { useQuery } from "@apollo/react-hooks";

//Query getBusinessInfo from cache
import { getBusinessInfoQuery as GET_BUSINESS_INFO_QUERY } from "../graphql/queries/business";

import styled from "styled-components";

const Container = styled.div`
    background: #ededed;
`;

const Home = () => {
    const { data, loading, error, client } = useQuery(GET_BUSINESS_INFO_QUERY, {
        variables: {
            businessId: 1,
        },
    });

    console.log(data, "\n Get Business Info Data");

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    client.writeData({
        data: {
            orderStatusMap: "test",
        },
    });

    console.log(data, "\n writeData status Map at Dashboard");
    return (
        <Container>
            <Header
                businessName={data.getBusinessInfo.businessName}
                orders={data.getBusinessInfo.orders}
            />
            <OpenOrders orders={data.getBusinessInfo.orders} />
            <InKitchen orders={data.getBusinessInfo.orders} />
            <Ready orders={data.getBusinessInfo.orders} />
            <Footer businessInfo={data.getBusinessInfo} />
        </Container>
    );
};

export default Home;
