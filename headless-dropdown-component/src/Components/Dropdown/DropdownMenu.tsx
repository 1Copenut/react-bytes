import { DropdownMenuProps } from "./types/DropdownTypes";

const DropdownMenu = ({
  dropdownItems,
  menuAttributes,
  menuItemAttributes,
  onDropdownItemClick,
}: DropdownMenuProps) => {
  return (
    <ul
      // tabIndex={0} // TODO: Add focus management so Safari + VO behave correctly
      {...menuAttributes()}
    >
      {dropdownItems.map((dropdownItem, index) => (
        <li
          key={index}
          onClick={() => onDropdownItemClick(dropdownItem)}
          {...menuItemAttributes(index)}
        >
          <p>{dropdownItem.text}</p>
          <small>{dropdownItem.description}</small>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
