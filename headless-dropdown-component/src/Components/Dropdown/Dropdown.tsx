import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";

import useDropdown from "./hooks/useDropdown";

import { DropdownProps } from "./types/DropdownTypes";

import "./Dropdown.css";

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  const {
    isOpen,
    selectedIndex,
    selectedItem,
    handleDropdownItemClick,
    handleKeyDown,
    toggleDropdown,
  } = useDropdown(dropdownItems);

  return (
    <div className="cd-component__dropdown" onKeyDown={handleKeyDown}>
      <DropdownTrigger
        onClick={toggleDropdown}
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
