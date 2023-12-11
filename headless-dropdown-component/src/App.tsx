import "./App.css";
import Dropdown from "./Components/Dropdown/Dropdown";
import { DropdownMenuItem } from "./Components/Dropdown/DropdownMenu";

const myItems: DropdownMenuItem[] = [
  {
    text: "JavaScript: The Good Parts",
    description: "The first book to help me understand JavaScript",
  },
  {
    text: "Ansible for DevOps",
    description: "Learning Ansible also helped me appreciate Python",
  },
  {
    text: "Linux Basics for Hackers",
    description: "My introduction to networking and sysadmin",
  },
];

const App = () => {
  return (
    <main>
      <h1>Headless dropdown component</h1>
      <div>
        <Dropdown dropdownItems={myItems} />
      </div>
    </main>
  );
};

export default App;
