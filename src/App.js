import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar"
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./features/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [selectedPage, setSelectedPage]= useState('home')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}      
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        <Landing setSelectedPage={setSelectedPage} />

      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full ">
        <MySkills />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto  ">
        <Projects />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <Contact />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
