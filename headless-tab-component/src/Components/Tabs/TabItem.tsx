import { TabItemType } from "./types/TabTypes";

const TabItem: React.FC<TabItemType> = ({
  title,
  currentIndex,
  index,
  handleTabClick,
  tabListItemAttributes,
  tabListLinkAttributes,
}) => {
  const Component = "li";

  return (
    <Component {...tabListItemAttributes()}>
      <a
        {...tabListLinkAttributes(index, currentIndex)}
        onClick={handleTabClick}
      >
        {title}
      </a>
    </Component>
  );
};

export default TabItem;
