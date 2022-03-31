import React, { useState } from "react";
import Navi from "./Navi";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Filter from "./Filter";
import ProductList from "./ProductList";
import productsData from "../../data/productsData";

export default function HomePage() {
  let [products, setProducts] = useState(productsData);

  return (
    <div>
      <Navi setProducts={setProducts} />
      <Container maxWidth="xl" style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Filter setProducts={setProducts} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductList products={products} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
