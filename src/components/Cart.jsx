import { toast } from 'react-toastify';
import  imageMap from '../utils/imageMap';
import Button from 'react-bootstrap/Button';
import '../css/Cart.css';


const Cart = ({items, onCheckout, onRemoveItem, show, setShowCart, total}) => {
    
    const handleCheckout = () => {
        if (items.length === 0){
            toast.warn('El carrito está vacío')
            return;
        }
        onCheckout();    
    };

    return (
        <div className={`carrito-sidebar ${show ? 'carrito-visible' : 'carrito-hidden'}`}>
            <button variant="secondary" className="carrito-close-btn" onClick={() => setShowCart(false)}>✖</button>

            <div className="carrito-content">
                <h2 className="carrito-title">Tu carrito</h2>
                <ul className="carrito-list">
                    {items.map((item, index) => (
                        <li key={index} className="carrito-item">
                            <img src={imageMap[item.image]} alt={item.name} className="carrito-img" />
                            <div className="carrito-info">
                                <p><strong>{item.name}</strong></p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Subtotal: ${ (item.price * item.quantity).toLocaleString('es-CL') }</p>
                            </div>
                            <Button className="carrito-remove-btn" onClick={() => onRemoveItem(item.id)}>Eliminar</Button>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="carrito-footer">
                <p className="carrito-total"><strong>Total:</strong> ${total.toLocaleString('es-CL')}</p>
                <Button
                    className="carrito-checkout-btn"
                    onClick={handleCheckout}
                    disabled={total === 0}
                    style={{
                        backgroundColor: total === 0 ? '#ccc' : '#FFD700',
                        cursor: total === 0 ? 'not-allowed' : 'pointer',
                    }}
                >
                    Realizar compra (${total.toLocaleString('es-CL')})
                </Button>
            </div>

        </div>
    )
};

export default Cart;

