import { useState } from "react";

import TabItem from "./TabItem";
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

    tabData.map((tab, index) => {
      if (tab.title === target.innerText) {
        setCurrentIndex(index);
      }
    });
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
        />
      );
    });
  };

  return (
    <>
      <ul role="tablist" className="cd-component__tablist">
        {renderTabs(tabData, currentIndex, handleClick)}
      </ul>
      <div aria-labelledby="tab-link-1" id="tab-1" role="tabpanel" tabIndex={0}>
        This is the content for tab number one. Pretty basic at this point.
      </div>
      <div
        aria-labelledby="tab-link-2"
        id="tab-2"
        role="tabpanel"
        tabIndex={0}
        className="js__visibility--is-hidden"
      >
        This is the content for tab number one. Pretty basic at this point.
      </div>
      <div
        aria-labelledby="tab-link-3"
        id="tab-3"
        role="tabpanel"
        tabIndex={0}
        className="js__visibility--is-hidden"
      >
        This is the content for tab number one. Pretty basic at this point.
      </div>
    </>
  );
};

export default Tablist;
