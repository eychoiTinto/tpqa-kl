import "../styles/hero.scss";
import "../styles/SecondHero.scss";
import HoverButton from "./HoverButton";

export default function Hero() {

  return (
    <>
      <section className="hero">
        <div className="hero-text-area">
          <h1 className="hero-text">CONTENTS</h1>
          <HoverButton />
        </div>
        <div className="hero-text-area">
          <div className="subtitle">
            <p>SMART VIDEO PRODUCTION MAKES IT</p>
            <p>A KEY TO CUSTOMER SUCCESS</p>
          </div>
          <h1 className="hero-text">MAKE YOUR</h1>
        </div>
        <div className="hero-text-area">
        </div>
        <div className="scroll-down">
          <span className="text">SCROLL DOWN</span>
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3076 10.0963L5.99989 15.4038L0.692138 10.0963L1.41139 9.38856L5.49989 13.4771L5.49989 0.596307L6.49989 0.596307L6.49989 13.4771L10.5884 9.38856L11.3076 10.0963Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
