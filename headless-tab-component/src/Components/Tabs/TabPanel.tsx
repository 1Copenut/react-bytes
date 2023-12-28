import { TabPanelType } from "./types/TabTypes";

const TabPanel: React.FC<TabPanelType> = ({ content, tabPanelAttributes }) => {
  const Component = "div";
  return <Component {...tabPanelAttributes()}>{content}</Component>;
};

export default TabPanel;
