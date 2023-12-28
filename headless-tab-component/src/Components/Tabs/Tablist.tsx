import TabItems from "./TabItems";
import TabPanel from "./TabPanel";
import useTabs from "./hooks/useTabs";
import { TabListType } from "./types/TabTypes";

import "./Tabs.css";

const Tablist: React.FC<TabListType> = ({
  tabData,
  tabListClasses = undefined,
}) => {
  const { currentContent, currentIndex, handleTabClick } = useTabs(tabData);

  return (
    <div className={tabListClasses}>
      <TabItems
        tabData={tabData}
        currentIndex={currentIndex}
        handleTabClick={handleTabClick}
      />
      <TabPanel tabData={tabData} content={currentContent} />
    </div>
  );
};

export default Tablist;
