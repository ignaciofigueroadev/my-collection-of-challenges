import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About/About";
import Challenges from "./pages/Challenges/Challenges";
import ComponentsChallenges from "./pages/ComponentsChallenges/ComponentsChallenges";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import PagesChallenges from "./pages/PagesChallenges/PagesChallenges";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/components-challenges"
          element={<ComponentsChallenges />}
        />
        <Route path="/pages-challenges" element={<PagesChallenges />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
