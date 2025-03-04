import "../styles/Footer.scss";
import youtube from "../assets/youtube.png";
import blog from "../assets/blog.png";

function Footer() {
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
    <footer className="footer-fr">
      <div className="footer-content-fr">
        <div className="contact-info-fr">
          <div className="info-group-fr">
            <h3>Number</h3>
            <p>+82) 02-2138-0142</p>
          </div>
          <div className="info-group-fr">
            <h3>E-mail</h3>
            <a href={`mailto:${email}`} onClick={handleContactClick}>hello@keynergylab.com</a>
          </div>
          <div className="info-group-fr">
            <h3>Office</h3>
            <p className="pretendard-font">
              서울 강남구 마곡중앙로 14, 서울창업허브 M+ 416호
            </p>
          </div>
        </div>
        <div className="social-links-fr">
          <a href="https://www.youtube.com/@keynergylab" target="_blank">
            <img src={youtube} alt="" />
          </a>

          <a
            href="https://blog.naver.com/PostList.naver?blogId=keynergylab&tab=1"
            target="_blank"
          >
            <img src={blog} alt="" />
          </a>
        </div>
      </div>
      <div className="copyright-fr">
        <p>Copyright &copy; 2025 keynergy lab Co.,Ltd All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
