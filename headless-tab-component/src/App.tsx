import "./App.css";
import Tablist from "./Components/Tabs/Tablist";
import { TabDataType } from "./Components/Tabs/types/TabTypes";

const tabData: TabDataType[] = [
  {
    title: "Tab 1 title",
    content:
      "This is the content for tab number one. Pretty basic at this point.",
  },
  {
    title: "Tab 2 title",
    content:
      "This is the content for tab number two. Pretty basic at this point.",
  },
  {
    title: "Tab 3 title",
    content: (
      <>
        <div>
          This is the content for tab number three. Pretty basic at this point.
        </div>
      </>
    ),
  },
];

const App = () => {
  return (
    <main>
      <h1>Headless tabbed component</h1>
      <div>
        <Tablist tabData={tabData} />
      </div>
    </main>
  );
};

export default App;
