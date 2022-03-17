import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.compnents";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ category }) => (
        <CategoryItem key={category} />
      ))}
    </div>
  );
};
export default Directory;
