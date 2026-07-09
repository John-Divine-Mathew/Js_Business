import ProductForm from "../components/product/ProductForm";
import ProductList from "../components/product/ProductList";
import ProductSearch from "../components/product/ProductSearch";

export default function Products() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="text-gray-500">
          Manage all flour products
        </p>
      </div>

      <ProductSearch />

      <ProductForm />

      <ProductList />

    </div>
  );
}