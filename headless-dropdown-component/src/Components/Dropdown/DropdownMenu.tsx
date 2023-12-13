import { DropdownMenuProps } from "./types/DropdownTypes";

const DropdownMenu = ({
  ariaLabel = "Custom listbox",
  dropdownItems,
  menuAttributes,
  onDropdownItemClick,
  selectedIndex,
}: DropdownMenuProps) => {
  const activeDescendantId =
    selectedIndex === -1 ? undefined : `dropdown-item-${selectedIndex}`;

  return (
    <ul
      aria-activedescendant={activeDescendantId}
      aria-label={ariaLabel}
      {...menuAttributes()}
      // tabIndex={0} // TODO: Add focus management so Safari + VO behave correctly
    >
      {dropdownItems.map((dropdownItem, index) => (
        <li
          aria-selected={index === selectedIndex ? "true" : undefined}
          className={
            index === selectedIndex
              ? "cd-component__dropdown-item js__dropdown-item--selected"
              : "cd-component__dropdown-item"
          }
          id={`dropdown-item-${index}`}
          key={index}
          onClick={() => onDropdownItemClick(dropdownItem)}
          role="option"
        >
          <p>{dropdownItem.text}</p>
          <small>{dropdownItem.description}</small>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
