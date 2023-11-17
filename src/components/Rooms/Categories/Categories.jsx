import Container from "../../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <Container>
      <div className = "pt-4 flex items-center justify-center overflow-x-auto">
        {categories.map((categorie) => (
          <CategoriesBox
            key={categorie.label}
            icon={categorie.icon}
            label={categorie.label}
          ></CategoriesBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
