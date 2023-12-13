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
    handleDropdownVisibility,
    handleKeyDown,
    setMenuAttributes,
    setTriggerAttributes,
  } = useDropdown(dropdownItems);

  return (
    <div className="cd-component__dropdown" onKeyDown={handleKeyDown}>
      <DropdownTrigger
        onClick={handleDropdownVisibility}
        selection={selectedItem ? selectedItem.text : "Select an item..."}
        triggerAttributes={setTriggerAttributes}
      />

      {isOpen && (
        <DropdownMenu
          ariaLabel="Listbox override!>"
          dropdownItems={dropdownItems}
          onDropdownItemClick={handleDropdownItemClick}
          selectedIndex={selectedIndex}
          menuAttributes={setMenuAttributes}
        />
      )}
    </div>
  );
};

export default Dropdown;
