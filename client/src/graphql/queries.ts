import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query Product {
    products {
      id
      name
      price
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($id: String!) {
    productDetail(id: $id) {
      id
      description
      price
      name
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
  query searchProducts($name: String!) {
    searchProducts(name: $name) {
      id
      name
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const GET_BRANDS = gql`
  query Brands {
    brand {
      id
      name
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORIES = gql`
  query productForCategory($name:String) {
    productForCategory(name: $name) {
      id
      name
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;


export const GET_MODELS = gql`
  query Models {
    models {
      id
      size
      color
    }
  }
`;

export const LOGIN_USER = gql`
  query loginUser(
    $email: String!
    $password: String!
  ) {
    loginUser(
      email: $email
      password: $password
    ) {
      id,
      isAdmin
    }
  }
`;
