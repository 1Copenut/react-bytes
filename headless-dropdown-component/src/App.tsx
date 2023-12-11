import "./App.css";
import { Dropdown, DropdownItem } from "./Components/Dropdown/Dropdown";

const items: DropdownItem[] = [
  { text: "First item", description: "This is the first non-original item" },
  { text: "Second item", description: "This is the second non-original item" },
];

const App = () => {
  return (
    <main>
      <h1>Headless dropdown component</h1>
      <div>
        <Dropdown items={items} />
      </div>
    </main>
  );
};

export default App;
