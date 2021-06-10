import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import "../App.css"
import * as location from "../images/earthLoader.json";
import * as success from "../images/done.json";
import Home from "./Home";
import * as SimpleLoading from "../images/Loader213.json";
import Navbar from "./Navbar";
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: SimpleLoading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader2() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={100} width={200} style={{display:"flex",alignItems:"center",justifyContent:"center",width:"400px",height:"90vh"}}/>
          ) : (

            <Lottie options={defaultOptions1} height={100} width={200} class="LoaderFirst" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"400px",height:"90vh"}}/>
          )}
        </>
      ) : (
        <>
            <Home/>
            <Navbar/>
            
        </>
      )}
    </>
  );
}

export default PreLoader2;