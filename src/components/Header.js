import React from "react";
import { HeaderBox } from "../style/style";

export const Header = (props) => {
  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  };

  const toScroll = (e) => {
    const coords = getOffset(
      document.querySelector("." + e.target.dataset.name)
    );

    window.scroll({
      top: coords.top,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <HeaderBox>
        <p>
          A collective list of free{" "}
          <span style={{ color: "#6e41e2", textDecoration: "underline" }}>
            Resources
          </span>{" "}
          for use in <br />
          software and web development.
        </p>
        <div className="tag_area">
          <span data-name="javascript" onClick={toScroll}>
            #javascript
          </span>
          <span data-name="css" onClick={toScroll}>
            #css
          </span>
          <span data-name="html" onClick={toScroll}>
            #html
          </span>
          <span data-name="web" onClick={toScroll}>
            #webtools
          </span>
          <span data-name="extensions" onClick={toScroll}>
            #extensions
          </span>
          <br />
          <br />
          <span data-name="react" onClick={toScroll}>
            #reactjs
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="none"
          viewBox="0 0 34 34"
        >
          <circle
            cx="14.167"
            cy="14.167"
            r="9.917"
            stroke="#8E97B6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.125"
          ></circle>
          <path
            stroke="#8E97B6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.125"
            d="M29.75 29.75l-8.5-8.5"
          ></path>
        </svg>
        <div id="searchBox">
          <input
            value={props.filterJS}
            onChange={(e) => {
              props.setFilterJS(e.target.value);
              props.setFilterCSS(e.target.value);
              props.setFilterHTML(e.target.value);
              props.setFilterWeb(e.target.value);
              props.setFilterEx(e.target.value);
              props.setFilterReact(e.target.value);
            }}
            type="text"
            placeholder="Find JavaScript, HTML, CSS Resources"
          />
        </div>
      </HeaderBox>
    </div>
  );
};
