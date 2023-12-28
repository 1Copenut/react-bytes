import useTabs from "./hooks/useTabs";
import { TabPanelType } from "./types/TabTypes";

const TabPanel: React.FC<TabPanelType> = ({ tabData, content }) => {
  const Component = "div";
  const { setTabPanelAttributes } = useTabs(tabData);

  return <Component {...setTabPanelAttributes()}>{content}</Component>;
};

export default TabPanel;
