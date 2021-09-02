import React, { Component } from 'react'
import Layout from '../components/Layout';
import getCommerce from '../utils/commerce';

export default function Home(props) {
  const { products } = props
  return (

    <Layout title="Home" commercePublicKey={props.commercePublicKey}>
      <main className="styles.main">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.media.source} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price.formatted_with_symbol}</p>
          </div>
        ))}
      </main>
    </Layout>


  )
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    }
  }
}