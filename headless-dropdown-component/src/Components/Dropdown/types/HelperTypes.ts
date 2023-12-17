type MenuAttributes = {
  "aria-activedescendant": string | undefined;
  "aria-label": string;
  className: string;
  role: string;
};

type MenuItemAttributes = {
  "aria-selected": boolean | undefined;
  className: string;
  id: string;
  ref: React.RefObject<HTMLUListElement>;
  role: string;
  tabIndex: number;
};

type TriggerAttributes = {
  className: string;
  ref: React.RefObject<HTMLDivElement>;
  role: string;
  tabIndex: number;
  type: string;
};

export type { MenuAttributes, MenuItemAttributes, TriggerAttributes };
