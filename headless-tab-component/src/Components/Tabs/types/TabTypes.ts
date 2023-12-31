import { ReactElement, ReactNode } from "react";

import {
  TabListAttributes,
  TabListItemAttributes,
  TabListLinkAttributes,
  TabPanelAttributes,
} from "./HelperTypes";

interface TabDataType {
  title: string;
  content: string | ReactNode;
}

type TabListType = {
  tabData: TabDataType[];
  tabClasses?: string;
};

type TabItemsType = {
  handleTabClick: HandleEventFn;
  tabListAttributes: () => TabListAttributes;
  tabListItemAttributes: () => TabListItemAttributes;
  tabListLinkAttributes: (
    index: number,
    currentIndex: number
  ) => TabListLinkAttributes;
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

type TabPanelType = {
  tabPanelAttributes: () => TabPanelAttributes;
};

type TabContextType = {
  currentContent: string | ReactNode;
  currentIndex: number;
  tabData: TabDataType[];
};

type TabContextProviderType = {
  children: ReactElement;
  value: {
    currentContent: string | ReactNode;
    currentIndex: number;
    tabData: TabDataType[];
  };
};

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
  TabContextType,
  TabContextProviderType,
  HandleEventFn,
  HandleRenderTabsFn,
};
