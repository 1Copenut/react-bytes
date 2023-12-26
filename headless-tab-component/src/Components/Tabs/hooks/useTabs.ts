import { useState } from "react";

import { TabDataType, HandleEventFn } from "../types/TabTypes";
import {
  TabListAttributes,
  TabListItemAttributes,
  TabListLinkAttributes,
  TabPanelAttributes,
} from "../types/HelperTypes";

const useTabs = (tabData: TabDataType[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick: HandleEventFn = (e) => {
    e.preventDefault();
    let target = e.target as HTMLElement;

    const newTabTitle = ({ title }: TabDataType) => title === target.innerText;
    const newTabIndex = tabData.findIndex(newTabTitle);

    if (newTabIndex === -1) {
      // Something went wrong, so fall back to the first tab. Should never happen.
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newTabIndex);
    }
  };

  // TODO: handleKeypress() logic

  const setTabListAttributes = (): TabListAttributes => ({
    className: "cd-component__tablist",
    role: "tablist",
  });

  const setTabListItemAttributes = (): TabListItemAttributes => ({
    className: "cd-component__tablist-item",
    role: "presentation",
  });

  const setTabListLinkAttributes = (index: number): TabListLinkAttributes => ({
    className:
      index === currentIndex
        ? "js__tab-link--current cd-component__tablist-link"
        : "cd-component__tab-link",
    href: `#tab-${index}`,
    id: `tab-link-${index}`,
    role: "tab",
  });

  const setTabPanelAttributes = (): TabPanelAttributes => ({
    "aria-labelledby": `tab-link-${currentIndex}`,
    id: `tab-${currentIndex}`,
    role: "tabpanel",
    tabIndex: 0,
  });

  return {
    currentIndex,
    handleClick,
    setTabListAttributes,
    setTabListItemAttributes,
    setTabListLinkAttributes,
    setTabPanelAttributes,
  };
};

export default useTabs;
