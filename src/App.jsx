import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Sandhyarani from "./Pages/Sandhyarani";
import Parbati from "./Pages/Parbati";
import Sunita from "./Pages/Sunita";
import Ratikanta from "./Pages/Ratikanta";
import Sanap from "./Pages/Sanap";

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

import Gallery from "./Pages/Gallery";
import Reports from "./Pages/Reports";

function App() {
  return (
    <>
      {/* ===== GLOBAL DEFAULT SEO ===== */}
      <Helmet>
        <title>Future Star Sports Academy</title>
        <meta
          name="description"
          content="Future Star Sports Academy empowers grassroots and rural athletes through structured sports development."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Stories */}
        <Route path="/sandhyarani-story" element={<Sandhyarani />} />
        <Route path="/parbati-story" element={<Parbati />} />
        <Route path="/sunita-story" element={<Sunita />} />
        <Route path="/ratikanta" element={<Ratikanta />} />
        <Route path="/sanap" element={<Sanap />} />

        {/* About */}
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />

        {/* Phase 2 */}
        <Route path="/reports" element={<Reports />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

