import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Logo1 from "../../../assets/arg3.jpg";
import Logo2 from "../../../assets/arg8.jpg";
import backgroundImage from "../../../assets/arg7.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };

  return (
    <div className="home1">
      <Navbar />

      <div
        className={`home-text-container ${isHovered ? "slide-in-visible" : ""}`}
        onMouseEnter={handleHover}
      >
        <div className="home-left-cont">
          <div className="home-text-title">About Argile Online</div>
          <div className="home-text">
            Established in 2019, Argile Online is one of Lebanons's premier
            online hookah stores that offers a variety selection of hookahs,
            hookah flavors, natural coals, and accessories. Our knowledgeable
            customer service crew is always ready to help and to ensure you have
            a pleasant shopping experience. In our hookah shop, you can find all
            your favorite shisha tobacco flavors and accessories for your hookah
            in one location.
          </div>
          <Link to="/OurStory" className="home-OurStory-link">
            {/* <button className="home-showmore">Show more</button> */}
          </Link>
        </div>
        <div className="imageContainer">
          <img className="home-text-image" src="/src/assets/ar1.webp" />
        </div>
      </div>

      <h1 className="d1">Discover More</h1>

      <div className="containerD">
        <div className="cardD">
          <img src={Logo1} alt="" />
          <div className="intro">
            <h1>Buy Argile</h1>
            <p>The Best products tailored to your desire!</p>
          </div>
        </div>

        <div className="cardD">
          <img src={Logo2} alt="" />
          <div className="intro">
            <h1>Rent Argile</h1>
            <p>The top picks with the best flavors to keep you entertained!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
