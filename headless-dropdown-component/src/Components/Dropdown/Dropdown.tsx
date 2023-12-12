import { useState } from "react";

import DropdownTrigger from "./DropdownTrigger";
import { DropdownMenu, DropdownItem, DropdownProps } from "./DropdownMenu";

import "./Dropdown.css";

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
      // Toggle menu and update trigger text if users made a selection
      case "Enter":
      case " ":
        setIsOpen(!isOpen);
        if (selectedIndex !== -1) {
          setSelectedItem(dropdownItems[selectedIndex]);
        }
        break;

      // Ascending traveral through list items 1-N. Wraps to item 1.
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();

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

      // Descending traveral through list items N-1. Wraps to item N.
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        e.stopPropagation();

        if (isOpen !== true) {
          setIsOpen(true);
        }

        if (selectedIndex === -1) {
          setSelectedIndex(0);
        } else if (selectedIndex === 0) {
          setSelectedIndex(dropdownItems.length - 1);
        } else {
          setSelectedIndex(selectedIndex - 1);
        }
        break;

      // Close menu immediately
      case "Escape":
        if (isOpen) {
          setIsOpen(false);
        }
        break;

      // TODO: Add Home key to jump to item 1
      // TODO: Add End key to jump to item N

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
