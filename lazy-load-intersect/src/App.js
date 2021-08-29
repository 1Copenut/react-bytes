import { useEffect, useRef, useState } from 'react';
import './app.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const current = buttonRef.current;
    const intersectionOptions = {
      root: document.getElementById('#main'),
      rootMargin: '0px',
      threshold: 0.25,
    };
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.disconnect();
      }
    };
  }, [buttonRef]);

  return (
    <main className="app" id="main">
      <h1>Hello world</h1>
      <p>
        Onward and upward, productize the deliverables and focus on the bottom
        line. We need to harvest synergy effects that's mint, well done nor zoom
        meeting at 2:30 today in this space and pipeline run it up the flag
        pole. Rock Star/Ninja can you ballpark the cost per unit for me who's
        the goto on this job with the way forward that jerk from finance really
        threw me under the bus. Flesh that out low hanging fruit for sorry i
        didn't get your email make sure to include in your wheelhouse pivot and
        we need to have a Come to agreement meeting with Phil about his
        attitude. Low-hanging fruit we need to harvest synergy effects, nor it
        is all exactly as i said, but i don't like it donuts in the break room,
        race without a finish line. We have put the apim bol, temporarily so
        that we can later put the monitors on, but put your feelers out. Move
        the needle can we parallel path yet creativity requires you to murder
        your children. Technologically savvy. Level the playing field focus on
        the customer journey, we want to see more charts. Best practices
        powerpoint Bunny, yet throughput and if you're not hurting you're not
        winning yet win-win-win. Deliverables quantity and we need a recap by
        eod, cob or whatever comes first. Make it more corporate please we've
        got kpis for that. Vec. Close the loop finance. Dog and pony show
        turbocharge the data beef up, nor this is not the hill i want to die on
        programmatically crank this out. Feature creep. They have downloaded
        gmail and seems to be working for now dog and pony show, for quick win.
        We need more paper bake it in marketing, illustration. I also believe
        it's important for every member to be involved and invested in our
        company and this is one way to do so high performance keywords so
        thought shower, but organic growth five-year strategic plan nor i'm
        sorry i replied to your emails after only three weeks, but can the site
        go live tomorrow anyway?. High touch client execute upstream selling but
        i don't want to empty the whole pool, gain alignment dunder mifflin
        service as core and innovations as power makes our brand. Pulling teeth
        thought shower, bench mark. Do i have consent to record this meeting we
        need to start advertising on social media yet ensure to follow
        requirements when developing solutions ensure to follow requirements
        when developing solutions. Highlights . Into the weeds spinning our
        wheels. Rehydrate the team great plan! let me diarize this, and we can
        synchronise ourselves at a later timepoint, for this medium needs to be
        more dynamic Q1 back-end of third quarter. Herding cats programmatically
        products need full resourcing and support from a cross-functional team
        in order to be built, maintained, and evolved dog and pony show, or
        zeitgeist. Form without content style without meaning let's unpack that
        later. On your plate. What do you feel you would bring to the table if
        you were hired for this position run it up the flagpole, or take five,
        punch the tree, and come back in here with a clear head quick win, but
        we need to leverage our synergies, or please use "solutionise" instead
        of solution ideas! :). Code due diligence. I don't want to drain the
        whole swamp, Bob called an all-hands this afternoon, can you champion
        this. Downselect c-suite but product management breakout fastworks all
        hands on deck for zoom meeting at 2:30 today. Are there any leftovers in
        the kitchen? mumbo jumbo run it up the flagpole, yet we've got kpis for
        that but granularity low-hanging fruit. Drive awareness to increase
        engagement it's not hard guys streamline product launch. Mobile friendly
        tbrand terrorists paddle on both sides, can we take this offline, for
        canatics exploratory investigation data masking we need evergreen
        content, forcing function . High performance keywords. After I ran into
        Helen at a restaurant, I realized she was just office pretty form
        without content style without meaning cross-pollination. Q1 reinvent the
        wheel make it look like digital and who's the goto on this job with the
        way forward . Let's take this conversation offline ultimate measure of
        success and social currency data-point you better eat a reality sandwich
        before you walk back in that boardroom. We're ahead of the curve on that
        one lose client to 10:00 meeting cc me on that. Increase the resolution,
        scale it up we need a larger print you must be muted. Message the
        initiative translating our vision of having a market leading platfrom I
        just wanted to give you a heads-up, so hop on the bandwagon but
        one-sheet. Flesh that out personal development, but weaponize the data
        run it up the flagpole, ping the boss and circle back deploy to
        production, or crank this out. Today shall be a cloudy day, thanks to
        blue sky thinking, we can now deploy our new ui to the cloud killing it,
        for cloud native container based or let's prioritize the low-hanging
        fruit or start procrastinating 2 hours get to do work while
        procrastinating open book pretend to read while manager stands and
        watches silently nobody is looking quick do your web search manager
        caught you and you are fured. Quick sync prethink.
      </p>
      <button ref={buttonRef} type="button">
        This is the obvservable
      </button>
    </main>
  );
};

export default App;
