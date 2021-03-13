import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import { QueryUsers } from "../../types";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ADD_PRODUCT } from "../../graphql/mutations";

interface ProductAttributes {
  name: String;
  description: String;
  price: Number;
  brandId: String;
  CategoriesId: String[];
}

function App() {
  const { data: dataQuery, loading, refetch } = useQuery<QueryUsers>(
    GET_PRODUCTS
  );
  const [mutate, { error: errorMutation, data }] = useMutation(ADD_PRODUCT);

  const handleClick = async () => {
    try {
      await mutate({
        variables: {
          name: "ALTAS ZAPAS WACHO",
          description: "muy copadas",
          price: 99,
          brandId: "1",
          CategoriesId: ["1", "2"],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  if (errorMutation) {
    console.log(errorMutation);
  }
  return (
    <div className="App">
      <button onClick={refetch}>refetch</button>
      <span>{loading ? "loading" : "ya cargo perro"}</span>
      <button onClick={handleClick}>Mutation</button>
      <Nav/>
    </div>
  );
}

export default App;
