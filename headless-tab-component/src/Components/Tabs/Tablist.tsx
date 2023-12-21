import "./Tabs.css";

const Tablist = () => {
  return (
    <>
      <ul role="tablist" className="cd-component__tablist">
        <li role="presentation">
          <a href="#tab-1" id="tab-link-1" role="tab">
            Tab 1 title
          </a>
        </li>
        <li role="presentation">
          <a href="#tab-2" id="tab-link-2" role="tab">
            Tab 2 title
          </a>
        </li>
        <li role="presentation">
          <a href="#tab-3" id="tab-link-3" role="tab">
            Tab 3 title
          </a>
        </li>
      </ul>
      <div aria-labelledby="tab-link-1" id="tab-1" role="tabpanel" tabIndex={0}>
        This is the content for tab number one. Pretty basic at this point.
      </div>
      <div
        aria-labelledby="tab-link-2"
        id="tab-2"
        role="tabpanel"
        tabIndex={0}
        className="js__visibility--is-hidden"
      >
        This is the content for tab number one. Pretty basic at this point.
      </div>
      <div
        aria-labelledby="tab-link-3"
        id="tab-3"
        role="tabpanel"
        tabIndex={0}
        className="js__visibility--is-hidden"
      >
        This is the content for tab number one. Pretty basic at this point.
      </div>
    </>
  );
};

export default Tablist;
