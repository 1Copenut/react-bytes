import { useState } from "react";
import { DropdownItem } from "../types/DropdownTypes";
import { TriggerAttributes } from "../types/HelperTypes";

const useDropdown = (dropdownItems: DropdownItem[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleDropdownItemClick = (currentItem: DropdownItem) => {
    setSelectedItem(currentItem);
    setIsOpen(false);
  };

  const handleDropdownVisibility = () => setIsOpen(!isOpen);

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

  const setMenuAttributes = () => ({
    className: "cd-component__dropdown-menu",
    role: "listbox",
  });

  const setTriggerAttributes = () => ({
    className: "cd-component__dropdown-trigger",
    role: "button",
    tabIndex: 0,
    type: "button",
  });

  return {
    isOpen,
    selectedIndex,
    selectedItem,
    handleDropdownItemClick,
    handleDropdownVisibility,
    handleKeyDown,
    setMenuAttributes,
    setTriggerAttributes,
  };
};

export default useDropdown;
