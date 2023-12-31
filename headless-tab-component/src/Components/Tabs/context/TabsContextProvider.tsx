import { useContext } from "react";

import { TabsContext } from "./TabsContext";
import { TabContextProviderType } from "../types/TabTypes";

const TabsContextProvider = ({ value, children }: TabContextProviderType) => {
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabsContext must be used within a TabsContextProvider");
  }

  return context;
};

export default TabsContextProvider;
export { useTabsContext };
