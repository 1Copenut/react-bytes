import { useState } from "react";

import DropdownTrigger from "./DropdownTrigger";
import { DropdownMenu, DropdownMenuItem, DropdownProps } from "./DropdownMenu";

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownMenuItem | null>(
    null
  );

  return (
    <div className="cd-component__dropdown">
      <DropdownTrigger
        onClick={() => setIsOpen(!isOpen)}
        selection={selectedItem ? selectedItem.text : "Select an item..."}
      />

      {isOpen && (
        <DropdownMenu
          dropdownItems={dropdownItems}
          onDropdownItemClick={setSelectedItem}
        />
      )}
    </div>
  );
};

export default Dropdown;
