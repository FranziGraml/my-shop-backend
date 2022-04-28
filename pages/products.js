import { getProducts } from "../src/services/getProducts";
import ProductGrid from "../src/component/ProductGrid";

export function getStaticProps() {
  const products = getProducts();

  return {
    props: {
      products,
    },
  };
}

export default function Products({ products }) {
  return (
    <div>
      <h1>Produkte</h1>

      <ProductGrid products={products} />
    </div>
  );
}
