interface DropdownItem {
  icon?: string;
  text: string;
  description: string;
}

type DropdownProps = {
  dropdownItems: DropdownItem[];
};

export type { DropdownItem, DropdownProps };
