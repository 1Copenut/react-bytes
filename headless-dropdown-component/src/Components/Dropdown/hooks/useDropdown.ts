import { useCallback, useEffect, useState, useRef } from "react";
import { DropdownItem } from "../types/DropdownTypes";
import {
  MenuAttributes,
  MenuItemAttributes,
  TriggerAttributes,
} from "../types/HelperTypes";

const useDropdown = (dropdownItems: DropdownItem[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const menuRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleDropdownItemClick = (index: number) => {
    setSelectedItem(dropdownItems[index]);
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const handleDropdownVisibility = () => setIsOpen(!isOpen);

  const handleKeyboardFocus = useCallback(() => {
    if (isOpen) {
      menuRef.current!.focus();
    }

    if (!isOpen && selectedIndex !== -1) {
      triggerRef.current!.focus();
    }
  }, [isOpen]);

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

  // TODO: Close the dropdown when user clicks outside the container
  // handleOutsideClick(e) {}

  useEffect(() => {
    handleKeyboardFocus();
  }, [handleKeyboardFocus]);

  const setMenuAttributes = (ariaLabel?: string): MenuAttributes => ({
    "aria-activedescendant":
      selectedIndex === -1 ? undefined : `dropdown-item-${selectedIndex}`,
    "aria-label": ariaLabel ?? "Custom React dropdown",
    className: "cd-component__dropdown-menu",
    ref: menuRef,
    role: "listbox",
    tabIndex: -1,
  });

  const setMenuItemAttributes = (index: number): MenuItemAttributes => ({
    "aria-selected": index === selectedIndex ? true : undefined,
    className:
      index === selectedIndex
        ? "cd-component__dropdown-item js__dropdown-item--selected"
        : "cd-component__dropdown-item",
    id: `dropdown-item-${index}`,
    role: "option",
  });

  const setTriggerAttributes = (userClass?: string): TriggerAttributes => ({
    className: userClass ?? "cd-component__dropdown-trigger",
    ref: triggerRef,
    role: "button",
    tabIndex: 0,
    type: "button",
  });

  return {
    isOpen,
    menuRef,
    triggerRef,
    selectedIndex,
    selectedItem,
    handleDropdownItemClick,
    handleDropdownVisibility,
    handleKeyDown,
    setMenuAttributes,
    setMenuItemAttributes,
    setTriggerAttributes,
  };
};

export default useDropdown;
