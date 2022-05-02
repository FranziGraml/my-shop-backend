import { getProducts } from "../src/services/getProducts";
import ProductGrid from "../src/component/ProductGrid";
import { swrFetcher } from "../src/lib/swr-fetcher";
import { SWRConfig } from "swr";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      //products
      fallback: {
        "/api/products": products,
      },
    },
  };
}

export default function Products({ /* products */ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <h1>Produkte</h1>

      <ProductGrid /* products={products} */ />
    </SWRConfig>
  );
}
