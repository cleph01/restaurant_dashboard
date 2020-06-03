import { gql } from "apollo-boost";

const getBusinessInfoQuery = gql`
    query($businessId: ID!) {
        getBusinessInfo(businessId: $businessId) {
            businessName
            website
            email
            phoneNumber
            address
            city
            state
            zipCode
            latitude
            longitude
            menuItems {
                productId
                category
                itemName
                description
                price
                soldOut
                imageURL
                imagename
            }
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

const getBusinessInfoCache = gql`
    query($businessId: ID!) {
        getBusinessInfo(businessId: $businessId) @client {
            businessName
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

export { getBusinessInfoQuery, getBusinessInfoCache };
