import { useCallback, useState } from "react";

import { TabDataType, HandleEventFn } from "../types/TabTypes";
import {
  TabListAttributes,
  TabListItemAttributes,
  TabListLinkAttributes,
  TabPanelAttributes,
} from "../types/HelperTypes";

const useTabs = (tabData: TabDataType[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState(tabData[0].content);

  const handleTabClick: HandleEventFn = (e) => {
    e.preventDefault();
    let target = e.target as HTMLElement;

    const newTabTitle = ({ title }: TabDataType) => title === target.innerText;
    const newTabIndex = tabData.findIndex(newTabTitle);

    if (newTabIndex === -1) {
      // Something went wrong, so fall back to the first tab. Should never happen.
      setCurrentIndex(0);
      renderTabContent(0);
    } else {
      setCurrentIndex(newTabIndex);
      renderTabContent(newTabIndex);
    }
  };

  // TODO: handleKeypress() logic

  const renderTabContent = useCallback(
    (currentIndex: number) => {
      setCurrentContent(tabData[currentIndex].content);
    },
    [currentIndex]
  );

  const setTabListAttributes = useCallback(
    (): TabListAttributes => ({
      className: "cd-component__tablist",
      role: "tablist",
    }),
    [tabData]
  );

  const setTabListItemAttributes = useCallback(
    (): TabListItemAttributes => ({
      className: "cd-component__tablist-item",
      role: "presentation",
    }),
    [tabData]
  );

  const setTabListLinkAttributes = useCallback(
    (index: number, currentIndex: number): TabListLinkAttributes => ({
      className:
        index === currentIndex
          ? "js__tab-link--current cd-component__tablist-link"
          : "cd-component__tab-link",
      href: `#tab-${index}`,
      id: `tab-link-${index}`,
      role: "tab",
    }),
    [tabData, currentIndex]
  );

  const setTabPanelAttributes = useCallback(
    (): TabPanelAttributes => ({
      "aria-labelledby": `tab-link-${currentIndex}`,
      id: `tab-${currentIndex}`,
      role: "tabpanel",
      tabIndex: 0,
    }),
    [tabData, currentIndex]
  );

  return {
    currentContent,
    currentIndex,
    handleTabClick,
    setTabListAttributes,
    setTabListItemAttributes,
    setTabListLinkAttributes,
    setTabPanelAttributes,
  };
};

export default useTabs;
