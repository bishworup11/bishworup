import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/bishworup3.jpg";
import Button from "./Button";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import PText from "./PText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    // .hero__name {
    //   font-family: 'Montserrat SemiBold';
    //   font-size: 7rem;
    //   // color: var(--white);
    //    color: #e6f1ff;
    // }

    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      background: rgb(10, 25, 47);
      background: linear-gradient(
        180deg,
        rgba(10, 25, 47, 0) 0%,
        rgba(10, 25, 47, 0.5284488795518207) 52%,
        rgba(10, 25, 47, 0) 100%
      );
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    bottom: 100px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
    bottom: 200px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.2rem;
    }
    img {
      max-height: 45px;
      width: 16px;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      list-style: none;
      margin: 0;
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 2rem; /* Adjust size as needed */

          color: var(--white); /* Icon color */
          &:hover {
            color: var(--primary-color); /* Change color on hover if needed */
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
              img {
                width: 20px;
              }
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Bishworup Mollik</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              <div
                style={{
                  background: "rgb(10, 25, 47)",
                  background:
                    "linear-gradient(180deg, rgba(10, 25, 47, 0) 0%, rgba(10, 25, 47, 0.53) 52%, rgba(10, 25, 47, 0) 100%)",
                }}
              >
                Skilled in programming and passionate about competitive coding,
                I continually seek opportunities to grow as a developer.
              </div>
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/bishworup11"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/bishworup11/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>bishworupmollik@gmail.com</p>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
