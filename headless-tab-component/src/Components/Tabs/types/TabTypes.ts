import { ReactElement, ReactNode } from "react";

import {
  TabListItemAttributes,
  TabListLinkAttributes,
  TabPanelAttributes,
} from "./HelperTypes";

interface TabDataType {
  title: string;
  content: string | ReactNode;
}

type TabItemType = Pick<TabDataType, "title"> & {
  index: number;
  currentIndex: number;
  handleClick: HandleEventFn;
  tabListItemAttributes: () => TabListItemAttributes;
  tabListLinkAttributes: (index: number) => TabListLinkAttributes;
};

type TabListType = {
  tabData: TabDataType[];
  tabListClasses?: string;
};

type TabPanelType = Pick<TabDataType, "content"> & {
  tabPanelAttributes: () => TabPanelAttributes;
};

// TODO: Move to helper types!
type HandleEventFn = (e: React.SyntheticEvent) => void;

type HandleRenderTabsFn = (
  tabData: TabDataType[],
  currentIndex: number,
  handleClick: HandleEventFn
) => ReactElement[];

export type {
  TabDataType,
  TabItemType,
  TabListType,
  TabPanelType,
  HandleEventFn,
  HandleRenderTabsFn,
};
