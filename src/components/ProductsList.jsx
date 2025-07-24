import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductCardsList = ({ onAddToCart }) => (
     <main class="container-md">
    <div className="row row-cols-1 row-cols-md-4 g-4 container-cards">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
        />
    ))}
    </div>
    </main>
);

export default ProductCardsList;