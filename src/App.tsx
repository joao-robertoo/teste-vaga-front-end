import { useState, useEffect } from 'react'
import './App.scss'
import ProductList from './components/ProductList'
import ProductModal from './components/ProductModal'
import { Product } from './types'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
  try {
    setIsLoading(true)
    const data = {
      success: true,
      products: [
        { productName: "Iphone 11 PRO MAX BRANCO 1", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 15000 },
        { productName: "IPHONE 13 MINI 1", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 9000 },
        { productName: "Iphone 11 PRO MAX BRANCO 2", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 14990 },
        { productName: "IPHONE 13 MINI 2", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 12000 },
        { productName: "Iphone 11 PRO MAX BRANCO 3", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 4550 },
        { productName: "IPHONE 13 MINI 3", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 38000 },
        { productName: "Iphone 11 PRO MAX BRANCO 4", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 42000 },
        { productName: "IPHONE 13 MINI 4", descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png", price: 520 },
      ]
    }
    setProducts(data.products)
  } catch (err) {
    setError('Erro ao carregar produtos')
  } finally {
    setIsLoading(false)
  }
}

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__container">
          <h1 className="app-header__logo">Econverse</h1>
          <nav className="app-header__nav">
            <ul className="app-header__nav-list">
              <li><a href="#tecnologia">Tecnologia</a></li>
              <li><a href="#supermercado">Supermercado</a></li>
              <li><a href="#livros">Livros</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <section className="products-section">
          <h2 className="products-section__title">Produtos relacionados</h2>
          
          {isLoading && <div className="loading">Carregando produtos...</div>}
          {error && <div className="error">Erro: {error}</div>}
          
          {!isLoading && !error && (
            <ProductList 
              products={products} 
              onProductClick={setSelectedProduct}
            />
          )}
        </section>
      </main>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}

export default App
