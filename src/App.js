import "./styles.css";
import { useState } from "react";

import { Novelpage } from "./Novel.js";
import { Selfhelppage } from "./Selfhelp.js";
import { Nonfictionpage } from "./Nonfiction.js";
import React from "react";

export default function App() {
  var [related, setrelated] = useState("");
  const bookDesc = {
    Novel: <Novelpage />,
    "Self help": <Selfhelppage />,
    "Non fiction": <Nonfictionpage />
  };

  var BookArr = Object.keys(bookDesc);

  function ClickHandler(item) {
    if (item in bookDesc) {
      setrelated(bookDesc[item]);
    }
  }

  return (
    <div className="App">
      <div id="firstpart">
        {/* <img id="image" src="Images/reading_book.svg" alt="book"></img> */}
        <h1>📚 Goodbooks</h1>
        {/* <div><Novelpage /></div> */}
        <p>Checkout below given books. Select a genre to get started</p>
        {BookArr.map(function (item) {
          return (
            <button key={item} onClick={() => ClickHandler(item)}>
              {item}
            </button>
          );
        })}
        {/* /* <button>Novel</button>
        <button>Self help</button>
        <button>Non fiction</button> */}
        <hr />
        <div id="booklist">{related}</div>
      </div>
    </div>
  );
}
