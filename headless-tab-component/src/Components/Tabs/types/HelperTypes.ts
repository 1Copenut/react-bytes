type TabListAttributes = {
  className: string;
  role: string;
};

type TabListItemAttributes = TabListAttributes;

type TabListLinkAttributes = TabListAttributes & {
  href: string;
  id: string;
};

type TabPanelAttributes = {
  "aria-labelledby": string;
  id: string;
  role: string;
  tabIndex: number;
};

export type {
  TabListAttributes,
  TabListItemAttributes,
  TabListLinkAttributes,
  TabPanelAttributes,
};
