import { ReactElement, ReactNode } from "react";

import { TabListItemAttributes, TabListLinkAttributes } from "./HelperTypes";

interface TabDataType {
  title: string;
  content: string | ReactNode;
}

type TabListType = {
  tabData: TabDataType[];
  tabClasses?: string;
};

type TabItemsType = Pick<TabListType, "tabData"> & {
  currentIndex: number;
  handleTabClick: HandleEventFn;
};

type TabItemType = Pick<TabDataType, "title"> & {
  index: number;
  currentIndex: number;
  handleTabClick: HandleEventFn;
  tabListItemAttributes: () => TabListItemAttributes;
  tabListLinkAttributes: (
    index: number,
    currentIndex: number
  ) => TabListLinkAttributes;
};

type TabPanelType = Pick<TabDataType, "content"> & Pick<TabListType, "tabData">;

// TODO: Move to helper types!
type HandleEventFn = (e: React.SyntheticEvent) => void;

type HandleRenderTabsFn = (
  tabData: TabDataType[],
  currentIndex: number,
  handleTabClick: HandleEventFn
) => ReactElement[];

export type {
  TabDataType,
  TabItemType,
  TabItemsType,
  TabListType,
  TabPanelType,
  HandleEventFn,
  HandleRenderTabsFn,
};
