import { gql } from "apollo-boost";

const updateOrderStatusMutation = gql`
    mutation($orderId: ID!, $status: Int!) {
        updateOrderStatus(orderId: $orderId, status: $status)
    }
`;

export { updateOrderStatusMutation };
