import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns is-centered">
            <div className="column is-2">
              <ProfileCard
                title={"Alexa"}
                handle={"@alexa99"}
                image={AlexaImage}
                descr={"Alexa was created by Amazon to help buy products from Amazon."}
              />
            </div>
            <div className="column is-2">
              <ProfileCard
                title={"Cortana"}
                handle={"@cortana32"}
                image={CortanaImage}
                descr={"Cortana was made by Microsoft. Does anyone use this?"}
              />
            </div>
            <div className="column is-2">
              <ProfileCard
                title={"Siri"}
                handle={"@siri01"}
                image={SiriImage}
                descr={"Siri was created by Apple. When will they provide meaningful updates for it?"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
