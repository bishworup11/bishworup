import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/bishworup2.jpg";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span> Bishworup Mollik</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                  I am a Computer Science and Engineering student from Sylhet,
                  Bangladesh, currently studying at Bangabandhu Sheikh Mujibur
                  Rahman Science and Technology University. I have developed
                  strong skills in programming languages such as C/C++, Java,
                  JavaScript, PHP, and Python, alongside frameworks like React,
                  Tailwind CSS, and Redux. My technical expertise also includes
                  database management with MySQL and Postgres.
                  <br /> <br />
                  I am deeply involved in competitive programming, having solved
                  over 1500 problems across platforms like Codeforces, LeetCode,
                  and GeeksforGeeks. My achievements include ranking 102nd and
                  120th in the ICPC 2022 and 2023 respectively, participation in
                  the National Collegiate Programming Contest (NCPC), and the
                  Code Samurai competition. I also secured a top 30 position in
                  the Inter-University Hackathon 2024.
                  <br />
                  <br />
                  Beyond academics, I enjoy learning new technologies, fishing,
                  and watching movies. My goal is to continually grow as a
                  developer, embracing new challenges and technologies to expand
                  my skill set. place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["The Aided High School, Sylhet"]}
              />
              <AboutInfoItem title="Collage" items={["MC College Sylhet"]} />
              <AboutInfoItem
                title="Varsity"
                items={[
                  "Bangladesh, currently studying at Bangabandhu Sheikh Mujibur Rahman Science and Technology University.",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript", "REACT"]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={["Node", "Express", "PHP"]}
              />
              <AboutInfoItem
                title="Design"
                items={["Photoshop", "After Effects", "Figma"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2023 JUN - 2023 APR"
                items={["Intrudial Attachment"]} 
              />

              <AboutInfoItem
                title="2024-Current"
                items={["Software developer at W3 Engineer "]}
              />
              {/* <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              /> */}
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
