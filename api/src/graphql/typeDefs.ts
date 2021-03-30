import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    isAdmin: Boolean!
    email: String!
    password: String!
    nlsuscribe: Boolean
    isGmail: Boolean
    products: [Product]
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float
    muestraimg: String
    detalleimg1: String
    detalleimg2: String
    detalleimg3: String
    brand: Brand
    categories: [Category!]
    models: [Model!]
    img: String
  }

  type Category {
    id: ID!
    name: String!
  }
  type Brand {
    id: ID!
    name: String!
  }

  type Image {
    id: ID!
    productId: String!
    title: String!
  }

  type Model {
    id: ID!
    size: String!
    color: String!
  }

  type Access {
    isAdmin: Boolean!
    id: String
    accessToken: String!
    refreshToken: String!
  }

  type FinalProduct {
    id: ID
    product: Product
    model: Model
    stock: String!
    cartproducts: [CartProduct]!
  }

  type ProductForCategory {
    products: [Product!]!
  }

  type Cart {
    id: ID
    userId: String
    cartproducts: [Orders]
  }

  type CartWithUser {
    id: ID
    user: User
  }

  type Logout {
    logout: Boolean
  }

  type CartProduct {
    id: ID!
    finalproductId: String!
    cartId: String!
    quantity: Int
    price: Float
    state: String
  }

  type Orders {
    id: ID!
    finalproducts: FinalProduct
    cart: CartWithUser
    quantity: Int!
    price: Float!
    state: String!
  }
  type Review {
    id: ID
    productId: String
    userId: String
    title: String
    score: Float!
    description: String
  }

  type Reviews {
    count: Float
    average: Float
    reviews: [Review]
  }

  type CartSimple {
    id: String
  }

  type Mutation {
    addImage(productId: String!, image: String!): Image!
    addReview(
      productId: String!
      userId: String!
      title: String!
      score: Float!
      description: String
    ): Review!
    addToCart(
      finalproductId: String!
      cartId: String!
      quantity: Int
      price: Float
    ): CartProduct!
    checkStock(cartId: String!): String
    controlQuantity(id: String!, quantity: Int!): String!

    createBrand(name: String!): Brand!
    createCart(userId: String!): Cart!
    createCategory(name: String!): Category!
    createModel(size: String!, color: String!): Model!
    createProduct(
      name: String!
      description: String
      price: Float
      muestraimg: String
      brandId: ID!
      CategoriesId: [String]
      ModelsId: [String]
    ): Product!
    createUser(
      firstName: String!
      lastName: String!
      userName: String!
      isAdmin: Boolean!
      email: String!
      password: String!
      isGmail: Boolean
      nlsuscribe: Boolean
    ): User!

    deleteCategory(id: String!): Category
    deleteProduct(id: String!): Product
    deleteReview(id: String!): String
    deleteUser(id: String!): String!

    loginUser(email: String!, password: String!): Access
    logoutUser(id: String!): Logout
    passwordReset(email: String!): String!
    removeFromCart(cartId: String!, finalproductId: String!): String!

    undeleteCategory(id: String!): Category
    undeleteProduct(id: String!): Product
    undeleteUser(id: String!): String!

    updateCategory(id: String!, input: String!): Category!
    updatePassword(password: String!, token: String!): String!
    updateProduct(id: String!, atr: String!, input: [String]): Product!
    updateReview(
      id: String!
      title: String!
      score: Float!
      description: String
    ): String
    updateState(orderId: String!, state: String!): CartProduct!
    updateStock(productId: String!, modelId: String!, input: Int): String
    updateUser(id: String!, atr: String!, input: String): String
  }

  type Query {
    brand(atr: String, ord: String): [Brand!]!
    cart(userId: String!, state: String): Cart
    cartSimple(userId: String!): CartSimple!
    categories(atr: String, ord: String): [Category!]!
    deleted: [Product!]!
    deletedUsers: [User!]!
    deletedCategories: [Category!]!

    finalproducts(productId: String!, modelId: String!): [FinalProduct!]!
    getReviews(productId: String!): Reviews
    image(productId: String!): [Image]!
    models: [Model!]!

    productDetail(id: String!): Product!
    productForCategory(name: String!): [Product!]!
    products(atr: String, ord: String): [Product!]!

    searchProducts(name: String!): [Product!]!
    users: [User!]!
    viewOrders(orderId: String!, state: String): [Orders]!

    stockProduct(productId: String!, modelId: String!): FinalProduct!
    allModelsProduct(productId: String!): [FinalProduct!]!
    allStock: [FinalProduct!]!
    userEmail(email: String!): [User!]!
  }
`;
export default typeDefs;
