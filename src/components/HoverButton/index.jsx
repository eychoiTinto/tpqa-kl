import "./module.style.scss";

const HoverButton = () => {
  const email = "hello@mysite.com";

  const handleContactClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${email}`;

    setTimeout(() => {
      if (document.hasFocus()) {
        const confirmOpen = confirm(
          "메일 앱이 실행되지 않았어요. 웹메일(Gmail)로 열까요?"
        );
        if (confirmOpen) {
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`);
        }
      }
    }, 500);
  };

  return (
    <a href={`mailto:${email}`} className="contact-btn" onClick={handleContactClick}>
      <span className="btn-content">
        <span className="text">contact</span>
        <span className="at-icon"></span>
      </span>
      <span className="btn-content hover">
        <span className="at-icon"></span>
        <span className="text">keynergy</span>
      </span>
    </a>
  );
};

export default HoverButton;
