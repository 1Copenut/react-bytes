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
  menuAttributes: (selectedIndex: number) => MenuAttributes;
  menuItemAttributes: (
    index: number,
    selectedIndex: number
  ) => MenuItemAttributes;
  onDropdownItemClick: (dropdownItem: DropdownItem) => void;
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
