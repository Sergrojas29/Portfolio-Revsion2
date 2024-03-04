import Social from "../components/Social";
import profile from '../assets/profilepic.png'
import '../style/homePage.css'
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>

      <div className="landingPage">
        <NavBar />
        <Social />
        <div className="heroSpace">
          <secction id="rightSec">
            <div id="pic"></div>
            <div id="nameContain">

              <div id="name">Sergio</div>
              <div id="name">Rojas</div>
              <div id="name">Aguilar</div>
            </div>
          </secction>
          <secction id="leftSec">
            <div id="graphic"></div>
            <div id="bthCont">
              <button className="btn1 btn"> Projects </button>
              <button className="btn2 btn" > Contact</button>
            </div>
          </secction>


        </div>
      </div>
    </>
  );
}
