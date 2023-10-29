import "./homePage.css";
import reactJsUsers from "assets/images/react-js-users.jpg";
import { Link } from "react-router-dom";
import Carousel from "components/Layout/Carousel";
import jordanWalkeImg from "assets/images/jordan-walke.jpg";
import leeByranImg from "assets/images/lee-byran.jpg";
import peteHuntImg from "assets/images/pete-hunt.jpg";
import tomOcchinoImg from "assets/images/tom-occhino.jpg";
import jingChenImg from "assets/images/jing-chen.jpg";

export default function HomePage() {
  const reactFounders = [
    {
      name: "Jordan Walke",
      photo: jordanWalkeImg,
      position: "Creator of React",
      desc: "He was influenced by XHP, a PHP-based component system that is still in use at Facebook, but also by functional programming ideas.",
    },
    {
      name: "Lee Byron",
      photo: leeByranImg,
      position: "Former Engineering lead @ FaceBook",
      desc: "Made early react designs standardized",
    },
    {
      name: "Pete Hunt",
      photo: peteHuntImg,
      position: "Former Photo/Videos team @ Facebook",
      desc: "He wanted to use React at Instagram, so he helped to extract React from Facebook-specific code. This prepared React to be open sourced.",
    },
    {
      name: "Tom Occchino",
      photo: tomOcchinoImg,
      position: "Former Engineering Director @ Facebook",
      desc: "Developed React along with Jordan Walke",
    },
    {
      name: "Jing Cheng",
      photo: jingChenImg,
      position: "Software Engineer @ FaceBook",
      desc: "The one who rethinked the concept of State",
    },
  ];
  return (
    <div className="homePageContent">
      <div className="mainHeader">
        <div className="mainHeaderContent">
          <h1 style={{ color: "#61dafb" }}>React</h1>
          <h4>
            <i>A JavaScript library for building user interfaces</i>
          </h4>
          <div className="homePageButtons">
            <Link to="/Docs/Beginners-guide-to=-react">
              <button>Get me into the website</button>
            </Link>
            <a href="https://react.dev/learn" target={"_blank"}>
              <button>Take me to the tutorial</button>
            </a>
          </div>
        </div>
        <div>
          <img src={reactJsUsers} />
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>The React Team</h3>
        <br />
        <Carousel carouselItems={reactFounders} />
      </div>
    </div>
  );
}
