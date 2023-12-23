import { TabItemType } from "./types/TabTypes";

const TabItem = ({ title, index, currentIndex, handleClick }: TabItemType) => {
  const tabClass = index === currentIndex ? "js__tab--current" : undefined;

  return (
    <li role="presentation" key={index}>
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
