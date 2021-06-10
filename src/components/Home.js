import React from 'react'
import "../App.css";
import hello from "../images/hello.png";
import { motion } from "framer-motion";
import MyMoji from "../images/MyMoji.png";

function Home() {
    let audio = new Audio("/Dev.wav");
    const start = () => {
      audio.play();
    };
    return (
        <div>
             <div className="welcome">
        <div className="waveHand">
          <img src={hello} alt="hey" draggable="false" />
        </div>
        <div className="HeadingDev">
          <motion.h1 animate={{ x: 0 }} transition={{ delay: 0.5 }}>
            Hey It's Dev...
          </motion.h1>
        </div>
        <div className="MyMoji">
          <img src={MyMoji} alt="Image" onClick={start} draggable="false" />
        </div>
      </div>
      <div className="scrollDown">
        <svg
          width="57"
          height="45"
          viewBox="0 0 57 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M1 1L20.1308 12.0932C24.3201 14.5224 29.4674 14.6141 33.7406 12.3356L55 1"
            stroke="white"
          />
          <path
            opacity="0.5"
            d="M2.10132 15.3089L21.0248 26.04C25.7956 28.7454 31.6342 28.6622 36.2687 25.8226L56.3145 13.5405"
            stroke="white"
          />
          <path
            opacity="0.5"
            d="M1 30L20.1308 41.0932C24.3201 43.5224 29.4674 43.6141 33.7406 41.3356L55 30"
            stroke="white"
          />
        </svg>
      </div>
        </div>


    )
}

export default Home
