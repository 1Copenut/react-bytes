const DropdownTrigger = ({
  selection,
  onClick,
}: {
  selection: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="cd-component__dropdown-trigger"
      tabIndex={0}
      onClick={onClick}
    >
      <span className="cd-component__dropdown-selection">{selection}</span>
    </div>
  );
};

export default DropdownTrigger;
