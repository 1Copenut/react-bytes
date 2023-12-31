import { createContext } from "react";

import { TabContextType } from "../types/TabTypes";
export const TabsContext = createContext<TabContextType | null>(null);
