import { Product } from '../types'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  // Calcular desconto (baseado no padrão visto nas imagens)
  const discountPercentage = 4 // 4% de desconto
  const discountedPrice = product.price * (1 - discountPercentage / 100)

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card__image-container">
        <img 
          src={product.photo} 
          alt={product.productName}
          className="product-card__image"
        />
      </div>
      
      <div className="product-card__content">
        <p className="product-card__description">
          {product.descriptionShort}
        </p>
        
        <div className="product-card__pricing">
          <span className="product-card__price-original">
            R$ {(product.price / 100).toFixed(2)}
          </span>
          <span className="product-card__price-current">
            R$ {(discountedPrice / 100).toFixed(2)}
          </span>
          <span className="product-card__price-installments">
            ou 2x de R$ {(discountedPrice / 200).toFixed(2)} sem juros
          </span>
        </div>
        
        <div className="product-card__shipping">
          Frete grátis
        </div>
        
        <button className="product-card__button">
          COMPRAR
        </button>
      </div>
    </div>
  )
}
