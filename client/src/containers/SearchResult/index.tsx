import React from "react";
import { useLocation } from "react-router";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { SEARCH_PRODUCTS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import { StyledSearchBar } from "../../components/SearchBar/StyledSearchBar";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResult() {
  const query = useQueryParams();
  query.get("query");
  const { data, loading, error } = useQuery(SEARCH_PRODUCTS, {
    variables: { name: query.get("query") },
  });
  const products = data["searchProducts"];

  return (
    <StyledSearchBar>
      <div className="filterBar">
        {products &&
          products.map((item, i) => (
            <Link to={`/product/${item.id}`}>
              <img
                src={item.photo}
                alt={item.name}
                className="productImg"
                key={item.id}
              />
            </Link>
          ))}
      </div>
    </StyledSearchBar>
  );
}
