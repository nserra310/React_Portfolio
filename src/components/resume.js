import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://drive.google.com/uc?id=1aaBT6zCP6rCdwYrN1e3FZCcuNYW8_P2w"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2>Nicholas Serra</h2>
            <h4 style={{ color: "black" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }}></hr>
            <p style={{fontSize: '15px', fontFamily: 'Oxygen'}}>
              My name is Nicholas Serra, I have only been coding for the past
              eight months and starting to get the feel for how to build fully
              functional websites. Upon completing this bootcamp I hope to build
              a strong portfolio in order to get a job doing web dev for a
              company in San Deigo. Ultimately I'd like to work for a company in
              SD for a few years and gain enough experience to be able to move
              to Washington and be able to work remotely. 
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }}></hr>
            <h4 style={{ color: "black"}}>Address</h4>
            <p style={{fontSize: '15px', fontFamily: 'Oxygen'}}>873 Stevens Ave 
                Solana Beach, CA 
                92075</p>
                <h4 style={{ color: "black"}}>Phone</h4>
                <p style={{fontSize: '15px', fontFamily: 'Oxygen'}}>908-328-4374</p>
                <h4 style={{ color: "black"}}>E-mail</h4>
                <p style={{fontSize: '15px', fontFamily: 'Oxygen'}}>nserra310@yahoo.com</p>
                <h4 style={{ color: "black"}}>Website</h4>
                <p style={{fontSize: '15px', fontFamily: 'Oxygen'}}>https://nserra310.github.io/Portfolio_Update/</p>

          </Cell>
          <Cell className="resume-right-col" col={8}>
           <h2>Education</h2>


           <Education
           startYear={2015}
           endYear={2018}
           schoolName="Art Institute of California"
           schoolDescription="Origionally went to Ai for Media Arts and Animation and learned alot about 3D/2D animation and alot of the design software such as the Adobe Creative suit, Autodesk Maya, Mudbox, Z-Brush and blender these tools have defintely helped me build a stronger skillset when developing websites from scratch."
           />
           <Education
           startYear={2019}
           endYear={2020}
           schoolName="UCSD"
           schoolDescription="Most recently have completed a web development bootcamp which focuses mainly on MERN full stack development using MongoDB, Express, ReactJS, and NodeJS. This class begins with the basics of HTML and CSS and teaches you everything you would need to know in order to build fully functional websites."
           />
           <hr style={{borderTop: '3px solid #663300'}} />

           <h2>Experience</h2>

           <Experience
           startYear={2019}
           endYear={2020}
           projectName="National Park Trip Planner"
           projectDescription="This was our first project in the coding bootcamp and we built an application that would help you plan a trip to National parks around the US.The app started off with drop down menu of all the states in the US which contain National parks.
           Upon chosing a state an API call is sent to the National Parks API and would give you a list of all National Parks in the state. Our application was  also linked to the OpenWeather API and would display the current weather in the park you were trying to visit as well as a five day forcast. 
           Lastly the National Park API would also provide a list of events that would be happening in that National Park within the next 30 days."
           />
           <Experience
           startYear={2019}
           endYear={2020}
           projectName="HikeSD"
           projectDescription="Our second group project was a simple application that would help you plan a day hike around the San Diego County Area. When you first open this application if gives you the current weather, windspeed and humidity in San Diego. The application gives the user for seperate buttons to chose from the filter out the hikes by distance. These distances were 1-3 miles, 3-6 miles, 6-9 miles, 10+ miles. 
           Once a button is selected an API request is sent to HikingProject and returns a list of all the hikes set with the distance requesterd by the user. A breif description of the hike and an image is also sent back to the user to help them decide if this hike is what they are looking for. "
           />
           <hr style={{borderTop: '3px solid #663300'}} />
           <h2>Skills</h2>
           <Skills 
            skill="JavaScript"
            progress={80}
           />
           <Skills 
            skill="HTML/CSS"
            progress={100}
           />
           <Skills 
            skill="NodeJS"
            progress={85}
           />
           <Skills 
            skill="React"
            progress={50}
           />
           <Skills 
            skill="MongoDB"
            progress={75}
           />
           <Skills 
            skill="MySQL"
            progress={90}
           />
           <Skills 
            skill="JQuery"
            progress={70}
           />





          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
