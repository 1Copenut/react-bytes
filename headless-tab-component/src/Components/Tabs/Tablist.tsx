import TabItems from "./TabItems";
import TabPanel from "./TabPanel";
import useTabs from "./hooks/useTabs";
import { TabListType } from "./types/TabTypes";

import styles from "./Tabs.module.css";

const Tablist: React.FC<TabListType> = ({
  tabData,
  tabClasses = undefined,
}) => {
  const allTabClasses = tabClasses
    ? `${styles.cd_component__tabs} ${tabClasses}`
    : `${styles.cd_component__tabs}`;
  const { currentContent, currentIndex, handleTabClick } = useTabs(tabData);

  return (
    <div className={allTabClasses}>
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
