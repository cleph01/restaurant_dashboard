import { gql } from "apollo-boost";

// User Queries
const getUserQuery = gql`
    query($id: ID) {
        getUser(id: $id) {
            id
            firstName
        }
    }
`;

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

// User Mutations

const createUserMutation = gql`
    mutation($firstName: String!, $cellPhone: String!, $password: String!) {
        createUser(
            firstName: $firstName
            cellPhone: $cellPhone
            password: $password
        ) {
            message
            token
        }
    }
`;

const createItemMutation = gql`
    mutation(
        $businessId: ID!
        $itemName: String!
        $category: String!
        $description: String!
        $price: Float!
        $imageURL: String!
    ) {
        createMenuItem(
            businessId: $businessId
            itemName: $itemName
            category: $category
            description: $description
            price: $price
            imageURL: $imageURL
        )
    }
`;

// Resume Queries

// Resume Mutations

export { createUserMutation, getUserQuery, getPreviousOrdersQuery };
