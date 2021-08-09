import React from "react";
import { SectionDiv } from "../style/style";
import "animate.css";

export const Section = (props) => {
  return (
    <>
      <SectionDiv>
        <p className="javascript">JavaScript</p>
        <div className="boxs-content">
          {props.filteredJS.map((data, index) => (
            <span key={index} className="content-boxs">
              <span className="logo_boxs">
                <img src={data.logo} alt="icons" width="100%" />
              </span>
              <h3 className="content-header">{data.name}</h3>
              <h4 className="content-subtitle">{data.subtitle}</h4>
              <h4 className="content-text">{data.description}</h4>
              <div className="boxs-content-footer animate__animated animate__fadeIn">
                <a
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  Go To{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1 1l6 6-6 6"
                    ></path>
                  </svg>
                </a>
              </div>
            </span>
          ))}
        </div>
        <p className="css">CSS/CSS3</p>
        <div className="boxs-content">
          {props.filteredCSS.map((data, index) => (
            <span key={index} className="content-boxs">
              <span className="logo_boxs">
                <img src={data.logo} alt="icons" width="100%" />
              </span>
              <h3 className="content-header">{data.name}</h3>
              <h4 className="content-subtitle">{data.subtitle}</h4>
              <h4 className="content-text">{data.description}</h4>
              <div className="boxs-content-footer animate__animated animate__fadeIn">
                <a
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  Go To{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1 1l6 6-6 6"
                    ></path>
                  </svg>
                </a>
              </div>
            </span>
          ))}
        </div>
        <p className="html">HTML/HTML5</p>
        <div className="boxs-content">
          {props.filteredHTML.map((data, index) => (
            <span key={index} className="content-boxs">
              <span className="logo_boxs">
                <img src={data.logo} alt="icons" width="100%" />
              </span>
              <h3 className="content-header">{data.name}</h3>
              <h4 className="content-subtitle">{data.subtitle}</h4>
              <h4 className="content-text">{data.description}</h4>
              <div className="boxs-content-footer animate__animated animate__fadeIn">
                <a
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  Go To{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1 1l6 6-6 6"
                    ></path>
                  </svg>
                </a>
              </div>
            </span>
          ))}
        </div>
        <p className="web">WebTools</p>
        <div className="boxs-content">
          {props.filteredWeb.map((data, index) => (
            <span key={index} className="content-boxs">
              <span className="logo_boxs">
                <img src={data.logo} alt="icons" width="100%" />
              </span>
              <h3 className="content-header">{data.name}</h3>
              <h4 className="content-subtitle">{data.subtitle}</h4>
              <h4 className="content-text">{data.description}</h4>
              <div className="boxs-content-footer animate__animated animate__fadeIn">
                <a
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  Go To{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1 1l6 6-6 6"
                    ></path>
                  </svg>
                </a>
              </div>
            </span>
          ))}
        </div>
        <p className="extensions">Extensions</p>
        <div className="boxs-content">
          {props.filteredEx.map((data, index) => (
            <span key={index} className="content-boxs">
              <span className="logo_boxs">
                <img src={data.logo} alt="icons" width="100%" />
              </span>
              <h3 className="content-header">{data.name}</h3>
              <h4 className="content-subtitle">{data.subtitle}</h4>
              <h4 className="content-text">{data.description}</h4>
              <div className="boxs-content-footer animate__animated animate__fadeIn">
                <a
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  Go To{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1 1l6 6-6 6"
                    ></path>
                  </svg>
                </a>
              </div>
            </span>
          ))}
        </div>
        <p className="react">ReactJS</p>
        <div className="boxs-content">
          {props.filteredReact.map((data, index) => (
            <span key={index} className="content-boxs">
              <span className="logo_boxs">
                <img src={data.logo} alt="icons" width="100%" />
              </span>
              <h3 className="content-header">{data.name}</h3>
              <h4 className="content-subtitle">{data.subtitle}</h4>
              <h4 className="content-text">{data.description}</h4>
              <div className="boxs-content-footer animate__animated animate__fadeIn">
                <a
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  Go To{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M1 1l6 6-6 6"
                    ></path>
                  </svg>
                </a>
              </div>
            </span>
          ))}
        </div>

        <span id="contact">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="6GF5C3CS7PFX6"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_AZ/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
          <img
            src="https://cdn.svgporn.com/logos/github-icon.svg"
            alt="github"
            width="30px"
          />
          <a
            href="https://github.com/adilvelizade0"
            target="_blank"
            rel="noopener noreferrer"
          >
            adilvelizade0
          </a>
        </span>
      </SectionDiv>
    </>
  );
};
