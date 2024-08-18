import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faHackerrank, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import DeveloperSvg from "./developerSvg";
import { Typewriter } from "react-simple-typewriter";
import styled from 'styled-components';
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";

import '../styles/skill.css';
import Particles from "./particles";

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
          font-size: 2rem;
          color: var(--white);
          &:hover {
            color: var(--primary-color);
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

const HeroSection2 = () => {
  return (
    <>
      <HeroStyles>
        <main className="hero-section2">
          <div className="hero-section2__row">
            <div className="hero-section2__col">
              <div>
                <h2 className="hero-section2__greeting">Hey !</h2>
                <h1 className="hero-section2__name">I'm Bishworup Mollik</h1>
                <span className="hero-section2__title">
                  <Typewriter
                    words={['Front-end Developer', 'Full Stack Developer']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
                <br />
                <span className="hero-section2__subtitle">I specialize in developing pixel-perfect user interfaces</span>
                <br />
              </div>
              <div className="hero-section2__social-links">
                <button className="hero-section2__social-button" aria-label="github" onClick={() => window.open('https://github.com/boshworup11', '_blank')}>
                  <FontAwesomeIcon size="2x" icon={faGithubSquare} />
                </button>
                <button className="hero-section2__social-button" aria-label="linkedin" onClick={() => window.open('https://www.linkedin.com/in/bishworup11', '_blank')}>
                  <FontAwesomeIcon size="2x" icon={faLinkedin} />
                </button>
                <button className="hero-section2__social-button" aria-label="hackerrank" onClick={() => window.open('https://hackerrank.com/bishworupmollik', '_blank')}>
                  <FontAwesomeIcon spin size="2x" icon={faHackerrank} />
                </button>
              </div>
              <button 
                className="hero-section2__resume-button"
                onClick={() => window.open('/static/Bishworup_Resume.pdf', '_blank')}
              >
                View Resume
              </button>
            </div>
            <div className="hero-section2__col hero-section2__svg-container">
              <DeveloperSvg />
            </div>
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
        
        </main>
      </HeroStyles>
     
    </>
  );
};

export default HeroSection2;
