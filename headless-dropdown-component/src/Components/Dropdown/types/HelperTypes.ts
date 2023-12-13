type MenuAttributes = {
  className: string;
  role: string;
};

type MenuItemAttributes = {
  "aria-selected": boolean | undefined;
  className?: string;
  id: string;
  role: string;
};

type TriggerAttributes = {
  className: string;
  role: string;
  tabIndex: number;
  type?: string;
};

export type { MenuAttributes, MenuItemAttributes, TriggerAttributes };
