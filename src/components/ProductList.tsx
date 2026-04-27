import { Product } from '../types'
import ProductCard from './ProductCard'
import './ProductList.scss'

interface ProductListProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export default function ProductList({ products, onProductClick }: ProductListProps) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard 
          key={`${product.productName}-${index}`}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  )
}
