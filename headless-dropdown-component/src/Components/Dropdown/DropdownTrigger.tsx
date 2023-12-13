import { DropdownTriggerProps } from "./types/DropdownTypes";

const DropdownTrigger = ({
  selection,
  onClick,
  triggerAttributes,
}: DropdownTriggerProps) => {
  return (
    <div onClick={onClick} {...triggerAttributes()}>
      {selection}
    </div>
  );
};

export default DropdownTrigger;
