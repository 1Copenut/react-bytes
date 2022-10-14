import React, { useState, useRef } from "react";
import Controls from "./components/Controls/Controls";
import Portal from "./components/Portal/Portal";

import "./app.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  const handleIsShown = () => {
    setShowModal(!showModal);
  };

  const passedModalProps = {
    ariaLabel: "Some label I have not considered",
    closeModal: handleIsShown,
    isShown: showModal,
    closeButtonRef: buttonRef,
    modalRef: modalRef,
  };

  return (
    <>
      <main>
        <h1>All about offices</h1>
        <p>
          <a href="http://officeipsum.com/index.php">Office Ipsum</a>
        </p>
        <p>
          Circle back we want to see more charts, close the loop, or canatics
          exploratory investigation data masking through the lens of greatest
          ROI, so we need a paradigm shift. Deep dive translating our vision of
          having a market leading platfrom great plan! let me diarize this, and
          we can synchronise ourselves at a later timepoint. What are the
          expectations crisp ppt let's schedule a standup during the sprint to
          review our KPIs. We need to touch base off-line before we fire the new
          ux experience. We need to get the vernacular right close the loop, so
          let's not solutionize this right now parking lot it. I know you're
          busy exposing new ways to evolve our design language.
        </p>
        <h2>More about&hellip;offices</h2>
        <p>
          You must be muted can you champion this, and can you put it into a
          banner that is not alarming, but eye catching and not too giant.
          Ensure to follow requirements when developing solutions. Drive
          awareness to increase engagement (let's not try to) boil the ocean
          (here/there/everywhere), nor we need to get all stakeholders up to
          speed and in the right place Bob called an all-hands this afternoon.
        </p>
        <h3>It&rsquo;s important we get the details right</h3>
        <p>
          Turn the crank. Blue sky thinking green technology and climate change
          , through the lens of, but that IPO will be a game-changer, for hit
          the ground running, we need evergreen content. Do i have your okay to
          record this meeting we need to make the new version clean have
          bandwidth design thinking action item, draw a line in the sand, or
          deep dive. Show pony one-sheet, so imagineer.
        </p>
        <Controls buttonRef={buttonRef} handleIsShown={handleIsShown} />
        <h2>In summary</h2>
        <p>
          I also believe it's important for every member to be involved and
          invested in our company and this is one way to do so pulling teeth
          game plan, and up the flagpole bazooka that run it past the boss jump
          right in and strive. Will they won't they its all new to me unless
          they bother until the end of time maybe vis a vis too many cooks over
          the line. Products need full resourcing and support from a
          cross-functional team in order to be built, maintained, and evolved
          optimize the tiger team. Work you gotta smoke test your hypothesis,
          and increase the pipelines re-inventing the wheel
        </p>
      </main>
      <Portal {...passedModalProps} />
    </>
  );
};

export default App;
