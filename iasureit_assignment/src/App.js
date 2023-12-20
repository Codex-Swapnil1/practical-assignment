import React from "react";
import "./App.css";
import TopComponents from "./components/TopComponents";
import ContactUsContainer from "./components/ContactUsContainer";
import FooterComponent from "./components/FooterComponent";
import EmbededMap from "./components/EmbededMap";

function App() {
  return (
    <div className="App">
      <TopComponents/>
      <ContactUsContainer/>
      <EmbededMap/>
      <FooterComponent/>
    </div>
  );
}

export default App;
