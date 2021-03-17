import { useQuery} from "@apollo/client";
import { Link } from "react-router-dom";
import React from 'react';
import { StyledCatalogue } from "./StyledCatalogue";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { GET_PRODUCTS } from "../../graphql/queries";
import Slider from "../../components/Slider";
import Filter from "../../components/Filter";

export default function Catalogue() {
  
  let  { data, loading, error } = useQuery(GET_PRODUCTS);
  const [loadedProducts, setLoadedProduct] = React.useState([]) 
  if (loading || !data) <span> Loading... </span>;
  if (error) return <span>Error {error.message}</span>;
  
  if (loadedProducts.length < 1){
    setLoadedProduct(data.products)
  }

  return (
    <StyledCatalogue>
      <Slider />
      <div className="filterBar">
        <section className="create">Crear</section>
        <section className="trend">Tendencias</section>
        <section className="sale">Ofertas</section>
      </div>
      <Filter setLoadedProduct={setLoadedProduct} />
      {loadedProducts.map((item, i) => (
        <Link to={`/product/${item.id || 1}`} key={item.id}>
          <img
            src={item.photo || fotosZapa.photo}
            alt="name"
            className="productImg"
          />
        </Link>
      ))}
    </StyledCatalogue>
  );
}
