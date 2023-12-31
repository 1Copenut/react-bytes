import { useCallback } from "react";

import TabItem from "./TabItem";
import { TabItemsType, HandleRenderTabsFn } from "./types/TabTypes";

const TabItems: React.FC<TabItemsType> = ({
  tabData,
  currentIndex,
  handleTabClick,
  tabListAttributes,
  tabListItemAttributes,
  tabListLinkAttributes,
}) => {
  const Component = "ul";

  const renderTabs: HandleRenderTabsFn = useCallback(
    (tabData, currentIndex, handleTabClick) => {
      return tabData.map((tab, index) => {
        const { title } = tab;

        return (
          <TabItem
            index={index}
            currentIndex={currentIndex}
            handleTabClick={handleTabClick}
            tabListItemAttributes={tabListItemAttributes}
            tabListLinkAttributes={tabListLinkAttributes}
            title={title}
            key={`cd-tablist-${index}`}
          />
        );
      });
    },
    [tabData, currentIndex]
  );

  return (
    <Component {...tabListAttributes()}>
      {renderTabs(tabData, currentIndex, handleTabClick)}
    </Component>
  );
};

export default TabItems;
