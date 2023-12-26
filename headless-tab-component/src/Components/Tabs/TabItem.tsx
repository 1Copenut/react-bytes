import { TabItemType } from "./types/TabTypes";

const TabItem: React.FC<TabItemType> = ({
  title,
  index,
  currentIndex,
  handleClick,
}) => {
  const tabClass = index === currentIndex ? "js__tab--current" : undefined;

  return (
    <li role="presentation">
      <a
        className={tabClass}
        href={`#tab-${index}`}
        id={`tab-link-${index}`}
        role="tab"
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  );
};

export default TabItem;
