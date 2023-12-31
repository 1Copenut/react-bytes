import { useContext } from "react";

import { TabsContext } from "./context/TabsContext";
import { TabPanelType } from "./types/TabTypes";

const TabPanel: React.FC<TabPanelType> = ({ tabPanelAttributes }) => {
  const Component = "div";
  const { currentContent } = useContext(TabsContext);

  return <Component {...tabPanelAttributes()}>{currentContent}</Component>;
};

export default TabPanel;
