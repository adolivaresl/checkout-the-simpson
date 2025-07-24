import  imagesMap from '../utils/imageMap';
import Button from 'react-bootstrap/Button';
import '../css/Cards.css';

const ProductCard = ({product, onAddToCart}) => (
     <div className="col">
        <div className="card">
            <img 
            src={imagesMap[product.image]} 
            className="card-img" 
            alt={product.name} />
            <div className="card-body description">
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text">${product.price.toLocaleString('es-CL')}</p>
                <p>{product.description}</p>
                
            </div>
            <Button 
                className="addCart btn btn-md"
                variant="primary"
                onClick={() => onAddToCart(product)}>
                Agregar al carrito</Button>
        </div>
    </div>
);

export default ProductCard;