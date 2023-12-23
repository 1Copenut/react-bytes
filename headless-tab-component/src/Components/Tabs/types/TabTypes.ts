import { ReactElement } from "react";

interface TabDataType {
  title: string;
  content: string;
}

type TabDataArrType = {
  tabData: TabDataType[];
};

type TabItemType = Pick<TabDataType, "title"> & {
  index: number;
  currentIndex: number;
  handleClick: HandleEventFn;
};

// TODO: Move to helper types!
type HandleEventFn = (e: React.SyntheticEvent) => void;

type HandleRenderTabsFn = (
  tabData: TabDataArrType["tabData"],
  currentIndex: number,
  handleClick: HandleEventFn
) => ReactElement[];

export type {
  TabDataType,
  TabDataArrType,
  TabItemType,
  HandleEventFn,
  HandleRenderTabsFn,
};
