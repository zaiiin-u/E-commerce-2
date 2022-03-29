import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Bodyy,
} from "./directory-item.styles";
const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Bodyy>
        <h2>{title}</h2>
        <span>Shop Now</span>
      </Bodyy>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
