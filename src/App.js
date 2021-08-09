import React, { useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { MainDiv } from "./style/style";
import {
  dataJS,
  dataCSS,
  dataHTML,
  dataWeb,
  dataEx,
  dataReact,
} from "./data/data";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [filterJS, setFilterJS] = useState("");
  const [filterCSS, setFilterCSS] = useState("");
  const [filterHTML, setFilterHTML] = useState("");
  const [filterWeb, setFilterWeb] = useState("");
  const [filterEx, setFilterEx] = useState("");
  const [filterReact, setFilterReact] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const filteredJS = dataJS.filter((item) => {
    return Object.keys({ name: item.name }).some((key) =>
      item[key].toString().toLowerCase().includes(filterJS.toLocaleLowerCase())
    );
  });

  const filteredCSS = dataCSS.filter((item) => {
    return Object.keys({ name: item.name }).some((key) =>
      item[key].toString().toLowerCase().includes(filterCSS.toLocaleLowerCase())
    );
  });
  const filteredWeb = dataWeb.filter((item) => {
    return Object.keys({ name: item.name }).some((key) =>
      item[key].toString().toLowerCase().includes(filterWeb.toLocaleLowerCase())
    );
  });
  const filteredEx = dataEx.filter((item) => {
    return Object.keys({ name: item.name }).some((key) =>
      item[key].toString().toLowerCase().includes(filterEx.toLocaleLowerCase())
    );
  });
  const filteredReact = dataReact.filter((item) => {
    return Object.keys({ name: item.name }).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterReact.toLocaleLowerCase())
    );
  });

  const filteredHTML = dataHTML.filter((item) => {
    return Object.keys({ name: item.name }).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterHTML.toLocaleLowerCase())
    );
  });

  const checkMode = () => {
    if (isDarkMode) {
      document.querySelector("body").style.backgroundColor = "#0e1238";
      document
        .querySelectorAll("p")
        .forEach((el) => (el.style.color = "#fafcfd"));
    } else {
      document.querySelector("body").style.backgroundColor = "#fafcfd";
      document
        .querySelectorAll("p")
        .forEach((el) => (el.style.color = "#0e1238"));
    }
  };

  return (
    <>
      {checkMode()}
      <MainDiv>
        <div id="modeToggle">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </div>
        <Header
          setFilterJS={setFilterJS}
          filterJS={filterJS}
          setFilterCSS={setFilterCSS}
          setFilterHTML={setFilterHTML}
          setFilterWeb={setFilterWeb}
          setFilterEx={setFilterEx}
          setFilterReact={setFilterReact}
        />
        <Section
          filteredJS={filteredJS}
          filteredCSS={filteredCSS}
          filteredHTML={filteredHTML}
          filteredWeb={filteredWeb}
          filteredEx={filteredEx}
          filteredReact={filteredReact}
        />
      </MainDiv>
    </>
  );
}

export default App;
