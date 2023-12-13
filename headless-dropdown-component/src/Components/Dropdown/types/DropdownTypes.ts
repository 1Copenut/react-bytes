import {
  MenuAttributes,
  MenuItemAttributes,
  TriggerAttributes,
} from "./HelperTypes";

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
  menuAttributes: (ariaLabel?: string) => MenuAttributes;
  menuItemAttributes: (index: number) => MenuItemAttributes;
  onDropdownItemClick: (index: number) => void;
  selectedIndex: number;
};

type DropdownTriggerProps = {
  selection: string;
  onClick: () => void;
  triggerAttributes: (userClass?: string) => TriggerAttributes;
};

export type {
  DropdownItem,
  DropdownProps,
  DropdownMenuProps,
  DropdownTriggerProps,
};
