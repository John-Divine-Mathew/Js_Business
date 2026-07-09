import products from "../../utils/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="grid gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}