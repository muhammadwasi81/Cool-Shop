import React, { Component } from 'react'
import getCommerce from '../utils/commerce';

export default function Home(props) {
  const { products } = props
  return (
    <div>

      <main className="styles.main">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.media.source} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price.formatted_with_symbol}</p>
          </div>
        ))}
      </main>
    </div>
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