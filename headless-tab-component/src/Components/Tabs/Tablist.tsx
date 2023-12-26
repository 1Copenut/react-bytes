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
    currentIndex,
    handleClick,
    setTabListAttributes,
    setTabListItemAttributes,
    setTabListLinkAttributes,
    setTabPanelAttributes,
  } = useTabs(tabData);

  const renderTabs: HandleRenderTabsFn = useCallback(
    (tabData, currentIndex, handleClick) => {
      return tabData.map((tab, index) => {
        const { title } = tab;
        return (
          <TabItem
            index={index}
            currentIndex={currentIndex}
            handleClick={handleClick}
            tabListItemAttributes={setTabListItemAttributes}
            tabListLinkAttributes={setTabListLinkAttributes}
            title={title}
            key={`cd-tablist-${index}`}
          />
        );
      });
    },
    [tabData, currentIndex, handleClick]
  );

  const renderTabContent = useCallback(
    (currentIndex: number) => {
      const currentContent = tabData[currentIndex].content;
      return <TabPanel content={currentContent} />;
    },
    [currentIndex]
  );

  return (
    <div className={tabListClasses}>
      <ul {...setTabListAttributes()}>
        {renderTabs(tabData, currentIndex, handleClick)}
      </ul>
      <div {...setTabPanelAttributes()}>{renderTabContent(currentIndex)}</div>
    </div>
  );
};

export default Tablist;
