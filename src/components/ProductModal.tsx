import { useState } from 'react'
import { Product } from '../types'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  
  const discountPercentage = 4
  const discountedPrice = product.price * (1 - discountPercentage / 100)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleIncrement = () => setQuantity(q => q + 1)
  const handleDecrement = () => setQuantity(q => q > 1 ? q - 1 : 1)

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <div className="modal__content">
          <div className="modal__image-section">
            <img 
              src={product.photo} 
              alt={product.productName}
              className="modal__image"
            />
          </div>

          <div className="modal__info-section">
            <h2 className="modal__title">
              {product.productName}
            </h2>
            
            <p className="modal__description">
              {product.descriptionShort}
            </p>

            <div className="modal__pricing">
              <span className="modal__price-label">LOREM IPSUM DOLOR SIT AMET</span>
              <span className="modal__price">
                R$ {(discountedPrice / 100).toFixed(2)}
              </span>
            </div>

            <p className="modal__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <a href="#" className="modal__link">Veja mais detalhes do produto {'>'}</a>

            <div className="modal__purchase">
              <div className="modal__quantity">
                <button 
                  className="modal__quantity-btn"
                  onClick={handleDecrement}
                >
                  −
                </button>
                <input 
                  type="number" 
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="modal__quantity-input"
                />
                <button 
                  className="modal__quantity-btn"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>

              <button className="modal__buy-button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
