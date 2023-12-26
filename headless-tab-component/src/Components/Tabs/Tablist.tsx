import { useState } from "react";

import TabItem from "./TabItem";
import TabPanel from "./TabPanel";
import {
  TabDataType,
  HandleEventFn,
  HandleRenderTabsFn,
} from "./types/TabTypes";

import "./Tabs.css";

const Tablist: React.FC<{ tabData: TabDataType[] }> = ({ tabData }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick: HandleEventFn = (e) => {
    e.preventDefault();
    let target = e.target as HTMLElement;

    const newTabTitle = ({ title }: TabDataType) => title === target.innerText;
    const newTabIndex = tabData.findIndex(newTabTitle);

    if (newTabIndex === -1) {
      // Something went wrong, so fall back to the first tab. Should never happen.
      setCurrentIndex(0);
      renderTabContent(0);
    } else {
      setCurrentIndex(newTabIndex);
      renderTabContent(newTabIndex);
    }
  };

  const renderTabs: HandleRenderTabsFn = (
    tabData,
    currentIndex,
    handleClick
  ) => {
    return tabData.map((tab, index) => {
      const { title } = tab;
      return (
        <TabItem
          index={index}
          currentIndex={currentIndex}
          handleClick={handleClick}
          title={title}
          key={index}
        />
      );
    });
  };

  const renderTabContent = (currentIndex: number) => {
    const currentContent = tabData[currentIndex].content;
    return <TabPanel content={currentContent} />;
  };

  return (
    <>
      <ul role="tablist" className="cd-component__tablist">
        {renderTabs(tabData, currentIndex, handleClick)}
      </ul>
      <div aria-labelledby="tab-link-1" id="tab-1" role="tabpanel" tabIndex={0}>
        {renderTabContent(currentIndex)}
      </div>
    </>
  );
};

export default Tablist;
