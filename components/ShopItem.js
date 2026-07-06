import React from 'react';
import {Button, Card, CardContent, CardActions, CardMedia, Typography } from '@mui/material'
import { AddShoppingCartSharp } from '@mui/icons-material';


function ShopItem({product_id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart }) {/* insert props here */

  const addToCart = () => {
    const isOnSale = is_on_sale === true || is_on_sale === "true";
    const finalPrice = isOnSale ? sale_price : price;

    onAddToCart({ product_id, name, price: finalPrice, is_on_sale, sale_price, quantity: 1 })

    console.log(`${name} added to Cart`)
  }
  

  const images = {
  1: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  2: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/44957d35-8edb-43cf-b518-457ff48a7e16/Product-grid-WDS.jpg",
  3: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/4626b5ac-8ac0-4e88-ae38-dd94cb12a89d/Product-grid-Email.jpg",
  4: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  5: "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg",
  6: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module"
};

  return (
    <Card style={{height: "400px", width: "200px", margin: "10px", display: "flex", flexDirection: "column"}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "160px" }}> <img src={image_url || images[product_id]} alt={name} style={{ width: "100px", height: "160px", objectFit: "cover", borderRadius: "0", marginTop: "24px" }}/> </div>

    <CardContent>
      <Typography variant="h6">{name}</Typography>   
      <Typography variant="subtitle2">{description}</Typography>
      <Typography variant="h5">${is_on_sale ? sale_price: price}</Typography>
    </CardContent>
      <CardActions>
        <Button color= "primary" variant="outlined" startIcon={<AddShoppingCartSharp />}onClick = {addToCart}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;