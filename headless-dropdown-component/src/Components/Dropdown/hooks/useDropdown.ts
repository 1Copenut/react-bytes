import { useState } from "react";
import { DropdownItem } from "../DropdownMenu";

const useDropdown = (items: DropdownItem[]) => {
  const [isOpen, setIsOpen] = useState(false);
};
