import { ReactElement, useState } from "react";
import "./Tabs.css";

interface Tab {
  title: string;
  content: string;
}

const tabData: Tab[] = [
  {
    title: "Tab 1 title",
    content:
      "This is the content for tab number one. Pretty basic at this point.",
  },
  {
    title: "Tab 2 title",
    content:
      "This is the content for tab number two. Pretty basic at this point.",
  },
  {
    title: "Tab 3 title",
    content:
      "This is the content for tab number three. Pretty basic at this point.",
  },
];

const renderTabs = (currentTabIndex: number): ReactElement[] => {
  return tabData.map((tab, index) => {
    const { title } = tab;
    const tabClass = index === currentTabIndex ? "js__tab--current" : undefined;

    return (
      <li role="presentation" key={index}>
        <a
          className={tabClass}
          href={`#tab-${index}`}
          id={`tab-link-${index}`}
          role="tab"
        >
          {title}
        </a>
      </li>
    );
  });
};

const Tablist = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <>
      <ul role="tablist" className="cd-component__tablist">
        {renderTabs(currentTab)}
      </ul>
      <div aria-labelledby="tab-link-1" id="tab-1" role="tabpanel" tabIndex={0}>
        This is the content for tab number one. Pretty basic at this point.
      </div>
      <div
        aria-labelledby="tab-link-2"
        id="tab-2"
        role="tabpanel"
        tabIndex={0}
        className="js__visibility--is-hidden"
      >
        This is the content for tab number one. Pretty basic at this point.
      </div>
      <div
        aria-labelledby="tab-link-3"
        id="tab-3"
        role="tabpanel"
        tabIndex={0}
        className="js__visibility--is-hidden"
      >
        This is the content for tab number one. Pretty basic at this point.
      </div>
    </>
  );
};

export default Tablist;
