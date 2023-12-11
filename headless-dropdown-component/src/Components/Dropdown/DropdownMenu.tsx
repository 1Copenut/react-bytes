interface DropdownItem {
  icon?: string;
  text: string;
  description: string;
}

type DropdownProps = {
  dropdownItems: DropdownItem[];
};

const DropdownMenu = ({
  dropdownItems,
  onDropdownItemClick,
}: {
  dropdownItems: DropdownItem[];
  onDropdownItemClick: (dropdownItem: DropdownItem) => void;
}) => {
  return (
    <div className="cd-component__dropdown-menu">
      {dropdownItems.map((dropdownItem, index) => (
        <div
          key={index}
          onClick={() => onDropdownItemClick(dropdownItem)}
          className="cd-component__dropdown-item"
        >
          <div className="cd-component__dropdown-item--details">
            {/* TODO: Add image */}
            <div>{dropdownItem.text}</div>
            <small>{dropdownItem.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export { DropdownMenu };
export type { DropdownItem, DropdownProps };
