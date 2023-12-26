import { ReactElement, ReactNode } from "react";

interface TabDataType {
  title: string;
  content: string | ReactNode;
}

type TabItemType = Pick<TabDataType, "title"> & {
  index: number;
  currentIndex: number;
  handleClick: HandleEventFn;
};

type TabPanelType = Pick<TabDataType, "content">;

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
  TabPanelType,
  HandleEventFn,
  HandleRenderTabsFn,
};
