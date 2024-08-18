import React from "react"
// import { Container, Title } from "./common"
import { achievements } from "../assets/data/achievements"

import SectionTitle from './SectionTitle';
import "./achievement.css"

const Achievement = () => {
  return (
    <div  className="container" >
       <SectionTitle subheading="" heading="Achievement" />
      <div className="achievement-area">
        
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-images">
                {achievement.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    className="achievement-img"
                    alt={`${achievement.name} image ${imgIndex + 1}`}
                  />
                ))}
              </div>
              <div className="achievement-info">
                <h4>{achievement.name}</h4>
                <p>{achievement.description}</p>
                <p>Team: {achievement.team}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Achievement }