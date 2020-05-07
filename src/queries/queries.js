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

// Resume Queries

// Resume Mutations

export { createUserMutation, getUserQuery, getPreviousOrdersQuery };
