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

// User Mutations
const LoginUserMutation = gql`
    mutation($cellPhone: String!, $password: String!) {
        loginUser(cellPhone: $cellPhone, password: $password) {
            firstName
            token
        }
    }
`;

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

export { LoginUserMutation, createUserMutation, getUserQuery };
