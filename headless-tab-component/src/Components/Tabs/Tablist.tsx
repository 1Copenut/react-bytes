import { useCallback } from "react";

import TabItem from "./TabItem";
import TabPanel from "./TabPanel";
import useTabs from "./hooks/useTabs";
import { TabListType, HandleRenderTabsFn } from "./types/TabTypes";

import "./Tabs.css";

const Tablist: React.FC<TabListType> = ({
  tabData,
  tabListClasses = undefined,
}) => {
  const {
    currentContent,
    currentIndex,
    handleTabClick,
    setTabListAttributes,
    setTabListItemAttributes,
    setTabListLinkAttributes,
    setTabPanelAttributes,
  } = useTabs(tabData);

  const renderTabs: HandleRenderTabsFn = useCallback(
    (tabData, currentIndex, handleTabClick) => {
      return tabData.map((tab, index) => {
        const { title } = tab;
        return (
          <TabItem
            index={index}
            currentIndex={currentIndex}
            handleClick={handleTabClick}
            tabListItemAttributes={setTabListItemAttributes}
            tabListLinkAttributes={setTabListLinkAttributes}
            title={title}
            key={`cd-tablist-${index}`}
          />
        );
      });
    },
    [tabData, currentIndex, handleTabClick]
  );

  return (
    <div className={tabListClasses}>
      <ul {...setTabListAttributes()}>
        {renderTabs(tabData, currentIndex, handleTabClick)}
      </ul>
      <TabPanel
        content={currentContent}
        tabPanelAttributes={setTabPanelAttributes}
      />
    </div>
  );
};

export default Tablist;
