import Product from "./Product";
import useSWR from "swr";

export default function ProductGrid({}) {
  const { data: products } = useSWR("/api/products");

  return (
    <>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              tags={product.tags}
            />
          </li>
        );
      })}
    </>
  );
}
