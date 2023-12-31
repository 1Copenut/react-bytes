import { useTabsContext } from "./context/TabsContextProvider";
import { TabPanelType } from "./types/TabTypes";

const TabPanel: React.FC<TabPanelType> = ({ tabPanelAttributes }) => {
  const Component = "div";
  const { currentContent } = useTabsContext();

  return <Component {...tabPanelAttributes()}>{currentContent}</Component>;
};

export default TabPanel;
