import { TabItemType } from "./types/TabTypes";

const TabItem: React.FC<TabItemType> = ({
  title,
  index,
  handleClick,
  tabListItemAttributes,
  tabListLinkAttributes,
}) => {
  return (
    <li {...tabListItemAttributes()}>
      <a onClick={handleClick} {...tabListLinkAttributes(index)}>
        {title}
      </a>
    </li>
  );
};

export default TabItem;
