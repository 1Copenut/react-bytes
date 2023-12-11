import { useState } from "react";
import DropdownTrigger from "./DropdownTrigger";

interface DropdownItem {
  icon?: string;
  text: string;
  description: string;
}

type DropdownProps = {
  items: DropdownItem[];
};

const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  return (
    <div className="cd-component__dropdown">
      <DropdownTrigger
        onClick={() => setIsOpen(!isOpen)}
        text={selectedItem ? selectedItem.text : "Select an item..."}
      />

      {isOpen && (
        <div className="cd-component__dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="cd-component__dropdown-item"
            >
              <div className="cd-component__dropdown-item--details">
                {/* TODO: Add image */}
                <div>{item.text}</div>
                <small>{item.description}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
export type { DropdownItem };
