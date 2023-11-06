import Link from "next/link";
import { useState } from "react";
import { useModal } from "src/utils/ModalContext";
import {
  MdNotes,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import NavWrapper from "./Header.style";
import Button from "@components/button";
import MobileMenu from "../MobileMenu/MobileMenu";

import data from "@assets/data/menu";
import logo from "@assets/images/logo-full-wobg.png";
import connectIcon from "@assets/images/icons/connect.png";
import walletIcon1 from "@assets/images/icons/pancake.png";
import walletIcon2 from "@assets/images/icons/uniswap.png";
import walletIcon3 from "@assets/images/icons/market.png";
import walletIcon4 from "@assets/images/icons/gate.png";
import socialdata from "@assets/data/social";

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle();
  };

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src={logo.src} alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              <ul>
                {/* menu  */}
                {data?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.url}>
                      <a>
                        {menu.title}{" "}
                        {menu.subMenus?.length > 0 && (
                          <MdOutlineKeyboardArrowDown />
                        )}
                      </a>
                    </Link>

                    {/* if has subMenu and length is greater than 0 */}
                    {menu.subMenus?.length > 0 && (
                      <ul className="sub_menu_list">
                        {menu.subMenus?.map((subMenu, i) => (
                          <li key={i}>
                            <Link href={subMenu.url}>
                              <a>
                                {subMenu.title}{" "}
                                {subMenu?.subMenuChilds?.length > 0 && (
                                  <MdOutlineKeyboardArrowRight />
                                )}
                              </a>
                            </Link>

                            {/* if subMenu child has menu child */}
                            {subMenu?.subMenuChilds?.length > 0 && (
                              <ul className="sub_menu_child_list">
                                {subMenu?.subMenuChilds?.map((subChild, i) => (
                                  <li key={i}>
                                    <Link href={subChild.url}>
                                      <a> {subChild.title} </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>

              <div className="social-link-list">
                {socialdata?.map((profile, i) => (
                  <Link key={i} href={profile.url}>
                    <a className="social-link" target="__blank">
                      {" "}
                      <img src={profile.icon.src} alt="social icon" />{" "}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
