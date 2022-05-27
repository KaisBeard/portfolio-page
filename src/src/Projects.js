import Collapsible from 'react-collapsible';
import SCscreen from "./pictures/Spacecrew screenshot.png"
import Tybe1 from "./pictures/tybe screen 1.png"
import Tybe2 from "./pictures/tybe screen 2.png"

function Projects() {
  return (
    <div>
        <div id="projects" className="spacertop"></div>
        <section>
          <h2>Projects</h2>
          <div>
            <div className="projektDiv">
              <h3>Dynamic multi channel chat app</h3>
              <p>A prototype that enables to text in a different way.</p>
              <Collapsible trigger="Details" >
                <div className="projectDetails">
                  <div> {/* add the swipable topics aspect */}
                    <p>This application allows to chat with the same people in different topics at the same time by swiping through the conversations. Topics are sorted by last message. Answering to a message directly generates a new topic. The project is a work in progress.</p>
                    <p>This project was a special practice to me in architecture. Before actually starting to code I had to think of a data model and figure out a way to make everything work together in a smart way. It was also a good practice for backend coding since there is a lot of communication between front- and backend happening.  </p>
                    
                    <h4>Used technologies</h4>
                    <ul>
                      <li>Html5, CSS3</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>MongoDB</li>
                      <li>Sockets</li>
                      <li>Swiper</li>
                      <li>Express</li>
                      <li>Git</li>
                      <li>Heroku</li>
                    </ul>
                  </div>
                
                <div className="pictures">
                  <img src={Tybe2} />
                </div>
                </div>
                <div className="projectDetails">
                  <a href="https://github.com/KaisBeard/comnycaid" target="_blank">Frontend Code</a>
                  <a href="https://github.com/KaisBeard/comnycaid-backend" target="_blank">Backend Code </a>
                  <a href="https://kaisbeard.github.io/comnycaid/#/" target="_blank">Check it out!</a>
                </div>
              </Collapsible>
            </div>
            
            <hr className="projectHr"/>

            <div className="projektDiv">
              <h3>Spacecrew Game</h3>
              <p>A website where you can put together a spaceship crew to populate alien planets.</p>
              <Collapsible trigger="Details">
                <div className="projectDetails">
                  <div>
                <p>The React Website is fetching fictional planets and crew members from a MongoDB server. The planets have conditions and the crewmembers skills. Depending on the match of the chosen planet and crewmembers the website will calculate the survival and thriving of the colony.</p>
                <p>A special challenge was implementing the game logic in JavaScript. Since the game has a lot of possible outcomes a lot of testing was necessary to make sure everything is working properly. </p>
                
                <h4>Used technologies</h4>
                <ul>
                  <li>Html5, CSS3</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>Git</li>
                  <li>Heroku</li>
                </ul>
                </div>
                
                <div><img src={SCscreen} /></div>
                </div>
                <div className="projectDetails">
                <a href="https://github.com/KaisBeard/spacecrew-mission" target="_blank">Frontend Code</a>
                <a href="https://github.com/KaisBeard/spacecrew" target="_blank">Backend Code </a>
                <a href="https://kaisbeard.github.io/spacecrew-mission/" target="_blank">Play the game!</a>
                </div>
              </Collapsible>
            </div>
          </div>
        </section>   
    </div>
  );
}

export default Projects;
