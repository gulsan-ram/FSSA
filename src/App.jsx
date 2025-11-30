import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Sandhyarani from "./Pages/Sandhyarani";
import Parbati from "./Pages/Parbati";
import Sunita from "./Pages/Sunita";
import Ratikanta from "./Pages/Ratikanta";
import Sanap from "./Pages/Sanap";



import Home from "./Pages/Home";
import AboutFSSA from "./Pages/About/AboutFssa";
import Team from "./Pages/About/Team";
import Partners from "./Pages/About/Partners";

import ProgramsOverview from "./Pages/Programs/ProgramsOverview";
import Aarambh from "./Pages/Programs/Aarambh";
import Udaan from "./Pages/Programs/Udaan";
import Lakshya from "./Pages/Programs/Lakshya";
import Abhyas from "./Pages/Programs/Abhyas";

import Impact from "./Pages/Impact";

import GetInvolved from "./Pages/GetInvolved";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";

import Media from "./Pages/Media";   
import Reports from "./Pages/Reports"; 


function App() {
  return ( <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandhyarani-story" element={<Sandhyarani />} />
        <Route path="/parbati-story" element={<Parbati />} />
         <Route path="/sunita-story" element={<Sunita />} />
          <Route path="/Ratikanta" element={<Ratikanta />} />
           <Route path="/Sanap" element={<Sanap/>} />
        
        

        {/* About Section */}
        <Route path="/about-fssa" element={<AboutFSSA />} />
        <Route path="/about-fssa/team" element={<Team />} />
        <Route path="/about-fssa/partners" element={<Partners />} />

        {/* Programs */}
        <Route path="/programs" element={<ProgramsOverview />} />
        <Route path="/programs/aarambh" element={<Aarambh />} />
        <Route path="/programs/udaan" element={<Udaan />} />
        <Route path="/programs/lakshya" element={<Lakshya />} />
        <Route path="/programs/abhyas" element={<Abhyas />} />

        {/* Others */}
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />

        {/* Phase 2 */}
        <Route path="/media" element={<Media />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;

