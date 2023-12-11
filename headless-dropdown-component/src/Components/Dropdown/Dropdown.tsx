import { useState } from "react";

import DropdownTrigger from "./DropdownTrigger";
import { DropdownMenu, DropdownItem, DropdownProps } from "./DropdownMenu";

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleDropdownItemClick = (currentItem: DropdownItem) => {
    setSelectedItem(currentItem);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case " ":
        if (selectedIndex !== -1) {
          setSelectedItem(dropdownItems[selectedIndex]);
        }
        setIsOpen(!isOpen);
        break;
      case "ArrowDown":
      case "ArrowRight":
        if (isOpen !== true) {
          setIsOpen(true);
        }
        if (
          selectedIndex === -1 ||
          selectedIndex === dropdownItems.length - 1
        ) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex(selectedIndex + 1);
        }
        break;
      case "ArrowUp":
      case "ArrowLeft":
        if (isOpen !== true) {
          setIsOpen(true);
        }
        if (selectedIndex === -1 || selectedIndex === 0) {
          setSelectedIndex(dropdownItems.length - 1);
        } else {
          setSelectedIndex(selectedIndex - 1);
        }
        break;
      default:
        null;
    }
  };

  return (
    <div className="cd-component__dropdown" onKeyDown={handleKeyDown}>
      <DropdownTrigger
        onClick={() => setIsOpen(!isOpen)}
        selection={selectedItem ? selectedItem.text : "Select an item..."}
      />

      {isOpen && (
        <DropdownMenu
          dropdownItems={dropdownItems}
          onDropdownItemClick={handleDropdownItemClick}
          selectedItemIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default Dropdown;
