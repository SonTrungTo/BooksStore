import gql from "graphql-tag";

export const shipOrder = gql`
    mutation($id: ID!, $shipped: Boolean!) {
        shipOrder(id: $id, shipped: $shipped) {
            id, shipped
        }
    }
`;

export const storeProduct = gql`
    mutation($product: productStore) {
        storeProduct(product: $product) {
            id, name, author, description, category, price, image, author
        }
    }
`;

export const updateProduct = gql`
    mutation($product: productUpdate) {
        updateProduct(product: $product) {
            id, name, author, description, category, price, image, author
        }
    }
`;

export const deleteProduct = gql`
    mutation($id: ID!) {
        deleteProduct(id: $id) {
            id
        }
    }
`;