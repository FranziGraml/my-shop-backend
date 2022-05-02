import Categorie from "./Categorie";

export default function CategorieGrid({ categories }) {
  return (
    <>
      {categories.map((categorie) => {
        return (
          <li key={categorie.id}>
            <Categorie name={categorie.name} description={categorie.description} />
          </li>
        );
      })}
    </>
  );
}
