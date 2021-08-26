import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/footer/logo-foot.png";
import S1 from "../assets/footer/social-1.png";
import S2 from "../assets/footer/social-2.png";
import S3 from "../assets/footer/social-3.png";
import S4 from "../assets/footer/social-4.png";
import S5 from "../assets/footer/social-5.png";
import S6 from "../assets/footer/social-6.png";

const Footer = () => {
  const history = useHistory();
  const LINKS = [
    { name: "Home", path: "/" },
    { name: "App", path: "/" },
  ];
  const SOCIAL = [
    { src: S1, link: "https://google.com/" },
    { src: S2, link: "https://google.com/" },
    { src: S3, link: "https://google.com/" },
    { src: S4, link: "https://google.com/" },
    { src: S5, link: "https://google.com/" },
    { src: S6, link: "https://google.com/" },
  ];

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <img src={Logo} alt="" />
          <div className="ftr-div"></div>
          {LINKS.map((link, index) => {
            return (
              <div
                key={index}
                onClick={history.push(link.path)}
                className="ftr-link"
              >
                {link.name}
              </div>
            );
          })}
        </div>
        <div className="footer__social">
          {SOCIAL.map((s, index) => {
            return (
              <a href={s.link} target="_blank" key={index} rel="noreferrer">
                <img src={s.src} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
