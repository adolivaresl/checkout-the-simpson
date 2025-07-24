import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCardsList from './components/ProductsList';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css';


const App = ()  =>{
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    
    toast.success(`${product.name} agregado al carrito`);
  };

  const removeItem = (id) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === id);
      
      if (!existingItem) return prev;
      
      if (existingItem.quantity > 1) {
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter(item => item.id !== id);
      }
    });
    
    toast.info('Producto eliminado del carrito');
  };

  const handleCheckout = () => {
    setCart([]);
    setShowCart(false);
    toast.success('Compra realizada con éxito!')
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="App">
      <Header />
        <h1>Merchandising</h1>
        <ProductCardsList onAddToCart={addToCart} />
        <button
        className="closeBTN floating-carrito"
        onClick={() => setShowCart(!showCart)}
        title={`Total: ${total.toLocaleString('es-CL')}`}>
          🛒
          {cart.length > 0 && (
            <span className="badge">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>

        {showCart && (
          <Cart 
          items={cart}
          onRemoveItem={removeItem}
          onCheckout={handleCheckout}
          show={showCart}
          setShowCart={setShowCart}
          total={total}
          />
        )}

        <ToastContainer
         position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        <Footer />
    </div>
  );
}

export default App;
