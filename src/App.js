import products from "./data/products";

function App() {
  return (
    <div className="App">
        <h1>Checkout the Simpson</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
