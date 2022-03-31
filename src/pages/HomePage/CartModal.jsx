import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import { cartClear, cartDell } from "../../Store/actions/cartActions";
import swal from "sweetalert";
import Button from "@mui/material/Button";

export default function CartModal({ handleClose }) {
  const { cartItem } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();
  const handleDeleteFromCart = (reduxId) => {
    dispatch(cartDell(reduxId));
    swal("Deleted!", "Deleted From Cart", "success");
  };
  const handleClearCart = () => {
    dispatch(cartClear());
    swal("Cart Cleared!", "Cart Cleared!", "success");
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "600" }}>
        Cart
      </div>
      <hr />
      {cartItem.length === 0 && <b>You have no items in your cart</b>}
      {cartItem.map((item) => (
        <div key={item.reduxId}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              {item.title}
            </Grid>
            <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
              <div>
                <Rating name="read-only" value={item.rating.rate} readOnly />
              </div>
              <div>({item.rating.count})</div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <b>{item.price} $</b>
            </Grid>
            <Grid item xs={12} sm={2}>
              <span onClick={() => handleDeleteFromCart(item.reduxId)}>
                <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
              </span>
            </Grid>
          </Grid>
          <hr />
        </div>
      ))}
      <div style={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleClearCart()}
        >
          <DeleteIcon /> Clear Cart
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          onClick={() => handleClose()}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
