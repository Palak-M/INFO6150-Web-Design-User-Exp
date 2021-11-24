// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs current-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Sandy

        </button>
        <button
          className={toggleState === 2 ? "tabs current-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Pebble
        </button>
        <button
          className={toggleState === 3 ? "tabs current-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Shell
        </button>
        <button
          className={toggleState === 4 ? "tabs current-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Boulder
        </button>

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  current-content" : "content"}
        >

          <p>
            Sandy beaches are the most frequent of all beach varieties. This type of beach is most common along coasts with low-energy waves, which deposit sand on the beach after being carried there by ocean currents.The longest sandy beach on the planet, Australia's Eighty Mile Beach, is an example of a sandy beach, with a total length of 140 miles.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  current-content" : "content"}
        >

          <p>
            Pebbles can be found on almost every beach on the planet. Pebble beaches are formed when high-energy waves dump pebbles carried by ocean currents on the shore. A portion of the instances of a pebble sea shores remember Dungeness for England, Alby in Sweden, and Birdling's Flat in New Zealand among numerous others.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  current-content" : "content"}
        >

          <p>
            A shell ocean side is predominantly comprised of shells. The shells that cover these sea shores are essentially from dead mollusks and are kept on the shore by waves. In a portion of the sea shores, the shell layer can be many feet top to bottom. Instances of this sort of sea shores are many and just two exist that are valid shell sea shores which are Australia's Shell Beach and Sanibel Shell Beach of the United States.
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  current-content" : "content"}
        >

          <p>
            Boulder sea shores are so named because of the rocks that cover their coastlines. The size of the rocks found on Boulder sea shores goes from little stones to gigantic house-sized rocks. An illustration of a Boulder ocean side is the Valugan Boulder Beach, which is covered with Boulder.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Tabs;