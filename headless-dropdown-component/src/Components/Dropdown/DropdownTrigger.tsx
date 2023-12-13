import { DropdownTriggerProps } from "./types/DropdownTypes";

const DropdownTrigger = ({
  selection,
  onClick,
  triggerAttributes,
}: DropdownTriggerProps) => {
  return (
    <div onClick={onClick} {...triggerAttributes()}>
      <span className="cd-component__dropdown-selection">{selection}</span>
    </div>
  );
};

export default DropdownTrigger;
