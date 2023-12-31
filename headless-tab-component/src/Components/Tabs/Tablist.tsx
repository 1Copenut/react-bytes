import TabItems from "./TabItems";
import TabPanel from "./TabPanel";
import TabsContextProvider from "./context/TabsContextProvider";
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
  const {
    currentContent,
    currentIndex,
    handleTabClick,
    setTabListAttributes,
    setTabListItemAttributes,
    setTabListLinkAttributes,
    setTabPanelAttributes,
  } = useTabs(tabData);

  return (
    <TabsContextProvider value={{ currentContent, currentIndex, tabData }}>
      <div className={allTabClasses}>
        <TabItems
          handleTabClick={handleTabClick}
          tabListAttributes={setTabListAttributes}
          tabListItemAttributes={setTabListItemAttributes}
          tabListLinkAttributes={setTabListLinkAttributes}
        />
        <TabPanel tabPanelAttributes={setTabPanelAttributes} />
      </div>
    </TabsContextProvider>
  );
};

export default Tablist;
