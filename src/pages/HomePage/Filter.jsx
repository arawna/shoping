import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import categoriesData from "../../data/categoriesData";
import productsData from "../../data/productsData";

export default function Filter({ setProducts }) {
  const handleClick = (category) => {
    setProducts(
      productsData.filter((product) => product.category === category)
    );
  };

  return (
    <Paper>
      <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "600" }}>
        Filter
      </div>
      <MenuList>
        {categoriesData.map((category, index) => (
          <MenuItem key={index}>
            <ListItemText onClick={() => handleClick(category)}>
              {category}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
