type MenuAttributes = {
  "aria-activedescendant": string | undefined;
  "aria-label": string;
  className: string;
  ref: React.RefObject<HTMLUListElement>;
  role: string;
  tabIndex: number;
};

type MenuItemAttributes = {
  "aria-selected": boolean | undefined;
  className: string;
  id: string;
  role: string;
};

type TriggerAttributes = {
  className: string;
  ref: React.RefObject<HTMLDivElement>;
  role: string;
  tabIndex: number;
  type: string;
};

export type { MenuAttributes, MenuItemAttributes, TriggerAttributes };
