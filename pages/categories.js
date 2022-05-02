import { getCategories } from "../src/services/getCategories";
import CategoryGrid from "../src/component/CategoryGrid";
import { swrFetcher } from "../src/lib/swr-fetcher";
import { SWRConfig } from "swr";

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function Categories({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <h1>Kategorien</h1>

      <CategoryGrid /* categories={categories} */ />
    </SWRConfig>
  );
}
