import Link from "next/link";
import Social from "../../SocialProfile/SocialProfile";
import footerLogo from "@assets/images/logo-full-wobg.png";
import { VscChevronUp } from "react-icons/vsc";
import FooterBottomStyleWrapper from "./FooterBottom.style";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom_wrapper">
      <Social />
      <div className="container">
        <div className="footer-bottom-content">
          <Link href="#">
            <a className="footer-logo">
              {" "}
              <img src={footerLogo.src} alt="footer logo" />{" "}
            </a>
          </Link>

          <ul className="footer-menu">
            <li>
              <Link href="#">
                <a>Docs</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Terms of Service</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>

          <div className="copyright-text">
            Copyright © 2023. All Rights Reserved
            <Link href="#">
              <a target="_blank"></a>
            </Link>
          </div>
          <div className="scrollup text-center">
            <Link href="#">
              <a>
                <VscChevronUp />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
