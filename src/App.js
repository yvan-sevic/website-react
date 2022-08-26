import React from "react";
import GlobalStyle from "./components/GlobalStyle.component";
import Nav from "./components/Nav.component";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import {Routes, Route} from 'react-router-dom'
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav/>
      <Routes>
        <Route path="/about" exact element={<AboutUs />}/>
        <Route path="/work" exact element={<OurWork />}/>
        <Route path="/work/:id" exact element={<MovieDetails />}/>
        <Route path="/contact" exact element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
