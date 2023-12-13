import { DropdownMenuProps } from "./types/DropdownTypes";

const DropdownMenu = ({
  ariaLabel = "Custom listbox",
  dropdownItems,
  menuAttributes,
  menuItemAttributes,
  onDropdownItemClick,
  selectedIndex,
}: DropdownMenuProps) => {
  return (
    <ul
      aria-label={ariaLabel}
      // tabIndex={0} // TODO: Add focus management so Safari + VO behave correctly
      {...menuAttributes(selectedIndex)}
    >
      {dropdownItems.map((dropdownItem, index) => (
        <li
          className={
            index === selectedIndex
              ? "cd-component__dropdown-item js__dropdown-item--selected"
              : "cd-component__dropdown-item"
          }
          key={index}
          onClick={() => onDropdownItemClick(dropdownItem)}
          {...menuItemAttributes(index, selectedIndex)}
        >
          <p>{dropdownItem.text}</p>
          <small>{dropdownItem.description}</small>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
