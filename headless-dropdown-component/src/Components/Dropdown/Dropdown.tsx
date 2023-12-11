import { useState } from "react";

import DropdownTrigger from "./DropdownTrigger";
import { DropdownMenu, DropdownItem, DropdownProps } from "./DropdownMenu";

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const handleDropdownItemClick = (currentItem: DropdownItem) => {
    setSelectedItem(currentItem);
    setIsOpen(false);
  };

  return (
    <div className="cd-component__dropdown">
      <DropdownTrigger
        onClick={() => setIsOpen(!isOpen)}
        selection={selectedItem ? selectedItem.text : "Select an item..."}
      />

      {isOpen && (
        <DropdownMenu
          dropdownItems={dropdownItems}
          onDropdownItemClick={handleDropdownItemClick}
        />
      )}
    </div>
  );
};

export default Dropdown;
