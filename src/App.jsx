import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { useLayoutEffect } from "react";
import { NavbarProvider } from "./contexts/NevbarContext";

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname]
  )
  return children;
}
function App() {
  return (
    <div>
      <Wrapper>
        <NavbarProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        </NavbarProvider>
      </Wrapper>
    </div>
  );
}

export default App;
