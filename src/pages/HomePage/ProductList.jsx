import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { cartAdd } from "../../Store/actions/cartActions";
import swal from "sweetalert";

export default function ProductList({ products }) {
  console.log(products);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartAdd(product));
    swal("Added To Cart!", product.title + " Added to cart.", "success");
  };

  return (
    <Paper style={{ marginTop: "20px" }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ height: "70px", overflow: "hidden" }}
                >
                  {product.title}
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ height: "100px", overflow: "auto" }}
                >
                  {product.description}
                </Typography>
                <p style={{ fontWeight: "600" }}>{product.price} $</p>
              </CardContent>
              <CardActions>
                <Rating name="read-only" value={product.rating.rate} readOnly />{" "}
                ({product.rating.count})
                <Button
                  size="small"
                  variant="contained"
                  style={{ marginLeft: "auto" }}
                  onClick={() => handleAddToCart(product)}
                >
                  <AddShoppingCartIcon /> Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
