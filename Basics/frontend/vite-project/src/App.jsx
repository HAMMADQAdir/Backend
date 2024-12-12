import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [j, setOnjects] = useState([]);
  useEffect(() => {
    // by using axios there is no need to explicitly convert  json data
    axios
    // use proxy instead of complete link
      .get("/get")
      .then((res) => {
        setOnjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>frontend</h1>
      <h1>Jokes: {j.length}</h1>
      {j.map((object) => 
        // if use curly brackets then u have to return it
        <h1>{object.content}</h1>
      )}
    </>
  );
}

export default App;
