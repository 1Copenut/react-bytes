import { DropdownMenuProps } from "./types/DropdownTypes";

const DropdownMenu = ({
  dropdownItems,
  menuAttributes,
  menuItemAttributes,
  onDropdownItemClick,
}: DropdownMenuProps) => {
  return (
    <ul {...menuAttributes()}>
      {dropdownItems.map((dropdownItem, index) => (
        <li
          key={index}
          onClick={() => onDropdownItemClick(index)}
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
