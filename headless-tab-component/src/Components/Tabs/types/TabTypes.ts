import { ReactElement } from "react";

interface TabDataType {
  title: string;
  content: string;
}

type TabItemType = Pick<TabDataType, "title"> & {
  index: number;
  currentIndex: number;
  handleClick: HandleEventFn;
};

// TODO: Move to helper types!
type HandleEventFn = (e: React.SyntheticEvent) => void;

type HandleRenderTabsFn = (
  tabData: TabDataType[],
  currentIndex: number,
  handleClick: HandleEventFn
) => ReactElement[];

export type { TabDataType, TabItemType, HandleEventFn, HandleRenderTabsFn };
