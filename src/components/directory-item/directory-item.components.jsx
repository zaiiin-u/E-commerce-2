import {
  DirectoryItemContainer,
  BackgroundImage,
  Bodyy,
} from "./directory-item.styles";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Bodyy>
        <h2>{title}</h2>
        <span>Shop Now</span>
      </Bodyy>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
