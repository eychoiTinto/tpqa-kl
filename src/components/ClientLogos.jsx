import { useEffect, useRef, useState } from "react";
import "../styles/ClientLogo.scss";

function ClientLogos() {
  const [logoItems, setLogoItems] = useState([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    fetch("/data/partnersLogo.json")
      .then((response) => response.json())
      .then((data) => setLogoItems(data))
      .catch((error) => console.error("데이터를 불러오는 중 오류 발생:", error));
  }, []);

  useEffect(() => {
    if (!containerRef.current || logoItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.5, // 요소의 50%가 보이면 활성화
      }
    );

    const items = containerRef.current.querySelectorAll(".logo-item");
    items.forEach((item) => observer.observe(item));

    // cleanup
    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [logoItems]);

  const logos = logoItems.map((partner, index) => ({
    id: index + 1,
    src: `${partner.image}`,
    alt: partner.name,
  }));

  return (
    <section className="client-logos">
      <div className="logo-container" ref={containerRef} >
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientLogos