import { getCategories } from "../src/services/getCategories";
import CategorieGrid from "../src/component/CategorieGrid";

export function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      categories,
    },
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h1>Kategorien</h1>

      <CategorieGrid categories={categories} />
    </div>
  );
}
