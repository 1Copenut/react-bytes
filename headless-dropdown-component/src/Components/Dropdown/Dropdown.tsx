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
    setMenuItemAttributes,
    setTriggerAttributes,
  } = useDropdown(dropdownItems);

  return (
    <div className="cd-component__dropdown" onKeyDown={handleKeyDown}>
      <DropdownTrigger
        selection={selectedItem ? selectedItem.text : "Select an item..."}
        onClick={handleDropdownVisibility}
        triggerAttributes={setTriggerAttributes}
      />

      {isOpen && (
        <DropdownMenu
          ariaLabel="Helpful programming resources"
          dropdownItems={dropdownItems}
          selectedIndex={selectedIndex}
          onDropdownItemClick={handleDropdownItemClick}
          menuAttributes={setMenuAttributes}
          menuItemAttributes={setMenuItemAttributes}
        />
      )}
    </div>
  );
};

export default Dropdown;
