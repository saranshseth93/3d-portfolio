import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { useState } from "react";

const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar setIsNavVisible={setIsNavVisible} />
        <Routes>
          <Route path="/" element={<Home isNavVisible={isNavVisible} />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
