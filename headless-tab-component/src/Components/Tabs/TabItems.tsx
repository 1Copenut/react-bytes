import { useCallback } from "react";

import TabItem from "./TabItem";
import { TabItemsType, HandleRenderTabsFn } from "./types/TabTypes";
import useTabs from "./hooks/useTabs";

const TabItems: React.FC<TabItemsType> = ({
  tabData,
  currentIndex,
  handleTabClick,
}) => {
  const Component = "ul";
  const {
    setTabListAttributes,
    setTabListItemAttributes,
    setTabListLinkAttributes,
  } = useTabs(tabData);

  const renderTabs: HandleRenderTabsFn = useCallback(
    (tabData, currentIndex, handleTabClick) => {
      return tabData.map((tab, index) => {
        const { title } = tab;

        return (
          <TabItem
            index={index}
            currentIndex={currentIndex}
            handleTabClick={handleTabClick}
            tabListItemAttributes={setTabListItemAttributes}
            tabListLinkAttributes={setTabListLinkAttributes}
            title={title}
            key={`cd-tablist-${index}`}
          />
        );
      });
    },
    [tabData, currentIndex]
  );

  return (
    <Component {...setTabListAttributes()}>
      {renderTabs(tabData, currentIndex, handleTabClick)}
    </Component>
  );
};

export default TabItems;
