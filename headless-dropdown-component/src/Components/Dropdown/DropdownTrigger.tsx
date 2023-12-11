const DropdownTrigger = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="cd-component__dropdown-trigger"
      tabIndex={0}
      onClick={onClick}
    >
      <span className="cd-component__dropdown-selection">{text}</span>
    </div>
  );
};

export default DropdownTrigger;
