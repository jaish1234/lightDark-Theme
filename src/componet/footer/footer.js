import Login from "../login/login";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">        
          <div className="socialIcons">  
            <a href="https://www.facebook.com/">  
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://en.wikipedia.org/wiki/Google%2B">
              <i className="fa-brands fa-google-plus"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            Copyright &copy;2023; designed by JAISH
          </p>
        </div>  
        <Login/>
      </div>   
    </>
  );
}

export default Footer;