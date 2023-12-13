import { MenuAttributes, TriggerAttributes } from "./HelperTypes";

interface DropdownItem {
  icon?: string;
  text: string;
  description: string;
}

type DropdownProps = {
  dropdownItems: DropdownItem[];
};

type DropdownMenuProps = {
  ariaLabel: string;
  dropdownItems: DropdownItem[];
  menuAttributes: () => MenuAttributes;
  onDropdownItemClick: (dropdownItem: DropdownItem) => void;
  selectedIndex: number;
};

type DropdownTriggerProps = {
  selection: string;
  onClick: () => void;
  triggerAttributes: () => TriggerAttributes;
};

export type {
  DropdownItem,
  DropdownProps,
  DropdownMenuProps,
  DropdownTriggerProps,
};
