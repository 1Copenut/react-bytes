import { TabItemType } from "./types/TabTypes";

const TabItem: React.FC<TabItemType> = ({
  title,
  index,
  handleClick,
  tabListItemAttributes,
  tabListLinkAttributes,
}) => {
  const Component = "li";

  return (
    <Component {...tabListItemAttributes()}>
      <a onClick={handleClick} {...tabListLinkAttributes(index)}>
        {title}
      </a>
    </Component>
  );
};

export default TabItem;
