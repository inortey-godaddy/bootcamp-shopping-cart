import React from 'react';
import {Button, Card, CardContent, CardActions, CardMedia, Typography } from '@mui/material'
import { AddShoppingCartSharp } from '@mui/icons-material';



function ShopItem({product_id, name, description, image_url, price, is_on_sale, sale_price}) {/* insert props here */

  const addToCart = () => {
    const cart = {


    id: product_id,
    product_name: name,
    description: description,
    image: image_url,
    price: price,
    is_on_sale: is_on_sale,
    sale_price: sale_price,


    };
  cart.push(newItem)
  console.log(`${product_name} added to Cart`)
};
  console.log('image:', image_url);  
  return (
    <Card style={{height: "500px"}}>
        <Card Media 
            component="img"
            alt={name}
            src = {image_url}
            style={{ height: "250px"}}
    />

    <CardContent>
      <Typography variant="h6">{name}</Typography>   
      <Typography variant="subtitle2">{description}</Typography>
      <Typography variant="h5">${is_on_sale ? sale_price: price}</Typography>
    </CardContent>
      <CardActions>
        <Button color= "primary" variant="outlined" startIcon={<AddShoppingCartSharp />}onclick = {addToCart}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;