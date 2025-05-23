import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/customCursor";
import { useLayoutEffect, useEffect, useRef, useState, useCallback } from "react";
import { NavbarProvider } from "./contexts/NevbarContext";

const Wrapper = ({ children, pageRef }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  return children;
};

function App() {
  const location = useLocation();
  const pageRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("rgb(240, 240, 240)");
  const [revertBgColor, setRevertBgColor] = useState("rgb(15, 15, 15)");
  const isHome = location.pathname === "/"; // 현재 경로가 "/"인지 확인

  // ✅ useCallback을 사용하여 이벤트 핸들러 메모이제이션
  const handleScroll = useCallback(() => {
    if (pageRef.current) {
      setScrollY(pageRef.current.scrollTop);
    }
  }, []);

  // ✅ 스크롤 이벤트 리스너 등록 및 제거
  useEffect(() => {
    if (!pageRef.current) return;
    
    pageRef.current.addEventListener("scroll", handleScroll);
    return () => {
      pageRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // ✅ 배경색 변경 로직 (홈에서만 적용)
  useEffect(() => {
    if (isHome) {
      const startThreshold = window.innerHeight * 2;
      if (scrollY >= startThreshold) {
        setBgColor("rgb(15, 15, 15)");
        setRevertBgColor("rgb(240, 240, 240)");
      } else {
        setBgColor("rgb(240, 240, 240)");
        setRevertBgColor("rgb(15, 15, 15)");
      }
    }
  }, [scrollY, isHome]);

  // ✅ body 배경색 변경
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);

  // ✅ Home 페이지가 아닐 때 transform 초기화 & Header에 navbar-black 추가
  useEffect(() => {
    const mainElement = document.querySelector("main");
    const headerElement = document.querySelector("header");

    if (mainElement) mainElement.style.transform = "none";

    if (headerElement) {
      if (!isHome) {
        headerElement.classList.add("navbar-black");
      } else {
        headerElement.classList.remove("navbar-black");
      }
    }
  }, [location.pathname]);

  return (
    <div className="page" ref={pageRef}>
      <Wrapper pageRef={pageRef}>
        <NavbarProvider>
          <CustomCursor />
          <Header bgColor={bgColor} revertBgColor={revertBgColor} isHome={isHome} pageRef={pageRef} />
          <main>
            <Routes>
              <Route path="/" element={<Home scrollY={scrollY} pageRef={pageRef} />} />
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
