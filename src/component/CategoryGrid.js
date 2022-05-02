import useSWR from "swr";
import Category from "./Category";

export default function CategoryGrid({}) {
  const { data: categories } = useSWR("/api/categories");

  return (
    <>
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <Category name={category.name} description={category.description} />
          </li>
        );
      })}
    </>
  );
}
