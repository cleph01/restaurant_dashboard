import { gql } from "apollo-boost";

const addMenuItem = gql`
    mutation($input: MenuItemInput!) {
        addMenuItem(input: $input)
    }
`;

export { addMenuItem };
