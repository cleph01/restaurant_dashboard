import { gql } from "apollo-boost";

const getPreviousOrdersQuery = gql`
    query {
        allUsers {
            id
            firstName
            cellPhone
            password
        }
    }
`;

const getBusinessInfoCache = gql`
    query($businessId: ID!) {
        getBusinessInfo(businessId: $businessId) @client {
            orders {
                orderId
                businessId
                userId
                total
                status
                created_at
                updated_at
                user {
                    firstName
                    cellPhone
                }
            }
        }
    }
`;

export { getPreviousOrdersQuery, getBusinessInfoCache };
