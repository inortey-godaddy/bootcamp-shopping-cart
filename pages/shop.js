import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import { Container, Typography } from '@mui/material'
import ShopItemList from '../components/ShopItemList';
import ShopItem from '../components/ShopItem';




export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">My Shop</Typography>
    </div>
    <div>
      <Link href="/cart">View cart</Link>
    </div>
    <ShopItemList />
  </Container>
);

export default ShopPage;