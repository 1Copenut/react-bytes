import { DropdownItem } from "./types/DropdownTypes";

const DropdownMenu = ({
  dropdownItems,
  onDropdownItemClick,
  selectedItemIndex,
}: {
  dropdownItems: DropdownItem[];
  onDropdownItemClick: (dropdownItem: DropdownItem) => void;
  selectedItemIndex: number;
}) => {
  const activeDescendantId =
    selectedItemIndex === -1 ? undefined : `dropdown-item-${selectedItemIndex}`;

  return (
    <ul
      aria-activedescendant={activeDescendantId}
      aria-label="My dropdown listbox"
      className="cd-component__dropdown-menu"
      role="listbox"
      // tabIndex={0} // TODO: Add focus management so Safari + VO behave correctly
    >
      {dropdownItems.map((dropdownItem, index) => (
        <li
          aria-selected={index === selectedItemIndex ? "true" : undefined}
          className={
            index === selectedItemIndex
              ? "cd-component__dropdown-item js__dropdown-item--selected"
              : "cd-component__dropdown-item"
          }
          id={`dropdown-item-${index}`}
          key={index}
          onClick={() => onDropdownItemClick(dropdownItem)}
          role="option"
        >
          {dropdownItem.text}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
