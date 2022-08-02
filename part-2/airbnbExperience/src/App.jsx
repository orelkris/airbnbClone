import { useState } from "react";
import companyLogo from "./assets/logo.png";
import ratingImage from "./assets/card/star.svg";
import cardImage1 from "./assets/card/katie-zaferes.png";
import cardImage2 from "./assets/card/wedding-photography1.png";
import { Navbar } from "../Components/Navbar";
import { Header } from "../Components/Header";
import { Card } from "../Components/Card";
import { Cards } from "../Components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar logo={companyLogo} />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
