import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
`;

const HeaderBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 719px;
  height: 204px;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    color: #0e1238;
    margin-block: 0;
    text-align: center;
  }

  input {
    height: 79px;
    width: 630px;
    background: #ffffff;
    border: 1px solid #dfe8ed;
    border-radius: 39.5px;
    padding-left: 89px;
    margin-top: 53px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    color: #6b7289;
    outline: none;
  }

  input:focus {
    border: 1px solid #6e41e2;
  }

  svg {
    position: absolute;
    top: 240px;
    left: 40px;
  }

  .tag_area {
    width: 100%;
    margin: 30px 0 0 0;
    text-align: center;

    span {
      background: #6e41e2;
      border-radius: 8px;
      color: white;
      font-weight: 700;
      padding: 5px 10px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

// * Section Content
const SectionDiv = styled.div`
  width: 90%;
  height: 100%;
  position: absolute;
  top: 370px;
  margin-top: 66px;

  #contact {
    margin-top: 4.5rem;

    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    img {
      margin-left: 30px;
      margin-right: 10px;
    }

    a {
      margin-top: 15px;
    }
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #0f1238;
    margin-block: 0;

    margin-left: 82px;
    margin-bottom: 20px;
    /* color: #6e41e2; */
    margin-top: 20px;
  }

  .boxs-content {
    /* position: absolute; */
    /* top: 73px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* margin-left: 82px; */

    .content-boxs:hover {
      .boxs-content-footer {
        display: block;
      }

      .content-text {
        opacity: 0;
      }
    }

    .content-boxs {
      height: 209px;
      width: 364px;
      background: #ffffff;
      box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.566816);
      border-radius: 10px;
      margin-right: 15px;
      margin-bottom: 15px;
      position: relative;

      .boxs-content-footer {
        height: 88px;
        width: 364px;
        position: absolute;
        bottom: 0px;
        background: #f9fbfc;
        display: none;
        border-radius: 0 0 10px 10px;

        .link-btn {
          background: #6e41e2;
          border-radius: 5px;
          height: 40px;
          color: white;
          text-decoration: none;
          padding: 10px 50px 9px 50px;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          position: relative;
          top: 34px;
          left: 30%;
          cursor: pointer;

          svg {
            margin-left: 7px;
          }
        }
      }

      .logo_boxs {
        position: absolute;
        width: 61px;
        height: 61px;
        left: 30px;
        top: 30px;

        img {
          position: absolute;
          /* border-radius: 50%; */
        }
      }

      .content-header {
        position: absolute;
        top: 30px;
        left: 116px;
        margin-block: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        color: #0f1238;
      }

      .content-subtitle {
        position: absolute;
        top: 64px;
        left: 116px;
        margin-block: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #151926;
        mix-blend-mode: normal;
        opacity: 0.7;
      }

      .content-text {
        position: absolute;
        width: 218px;
        top: 92px;
        left: 116px;
        font-style: normal;
        font-weight: normal;
        margin-block: 0;
        font-size: 16px;
        line-height: 21px;
        color: #151926;
      }
    }
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export { MainDiv, HeaderBox, SectionDiv, FooterDiv };
