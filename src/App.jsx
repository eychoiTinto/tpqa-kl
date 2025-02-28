import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
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
  const pageRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("rgb(240, 240, 240)");
  const [revertBgColor, setRevertBgColor] = useState("rgb(15, 15, 15)");

  // 스크롤값 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        setScrollY(pageRef.current.scrollTop);
      }
    };

    pageRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      pageRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // 배경색 변경 로직
    const startThreshold = window.innerHeight * 2;

    if (scrollY >= startThreshold) {
      setBgColor("rgb(15, 15, 15)");
      setRevertBgColor("rgb(240, 240, 240)");
    } else {
      setBgColor("rgb(240, 240, 240)");
      setRevertBgColor("rgb(15, 15, 15)");
    }
  }, [scrollY]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);


  return (
    <div className="page" ref={pageRef}>
      <Wrapper>
        <NavbarProvider>
        <Header bgColor={bgColor} revertBgColor={revertBgColor} />
        <main>
          <Routes>
            <Route path="/" element={<Home scrollY={scrollY} />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </main>
        </NavbarProvider>
      </Wrapper>
    </div>
  );
}

export default App;
