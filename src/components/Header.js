/* eslint-disable */

import React from "react";
import { MenuToggle } from "./MenuToggle";
import { motion } from "framer-motion";
import LanguageIcon from "@mui/icons-material/Language";
import styled from "styled-components";
import "global.scss";
const logoWhite = "https://cdn.pixabay.com/photo/2017/08/02/21/01/macbook-2573421_1280.jpg";
const logoBlack = "https://cdn.pixabay.com/photo/2017/08/02/21/01/macbook-2573421_1280.jpg";
const navItems = [
  // {
  //   id: 0,
  //   title: "서비스",
  //   href: "/services",
  // },
  // {
  //   id: 1,
  //   title: "회사소개",
  //   href: "/services",
  // },
  // {
  //   id: 2,
  //   title: "포트폴리오",
  //   href: "/portfolio",
  // },
  {
    id: 1,
    title: "휴대폰 사업",
    href: "/detail/phone",
  },
  {
    id: 2,
    title: "마케팅 사업",
    href: "/detail/marketing",
  },
  {
    id: 3,
    title: "IT 사업",
    href: "/detail/it",
  },
];
const variants = {
  open: { opacity: 1, right: "0vw", y: 0 },
  closed: { opacity: 0, right: "-100vw", y: 0 },
};

const Header = ({ scrollY }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const headerActive = isActive || scrollY > 50;

  return (
    <header
      className={"basic-header " + (headerActive && "active")}
      onMouseEnter={() => {
        // setIsActive(true);
      }}
      onMouseLeave={() => {
        // setIsActive(false);
      }}
    >
      <div className="inner">
        {/* <img className="site-logo" src="" alt="logo" /> */}
        {/* <h1 className="site-logo">큐브린</h1> */}
        <a href="/">
          <img className="site-logo white" src={logoWhite} alt="cubelean" />
        </a>
        <a href="/">
          <img className="site-logo black" src={logoBlack} alt="cubelean" />
        </a>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} open={isOpen} />
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          style={{ position: "fixed", top: 0 }}
        >
          <aside className="navs mobile">
            <li className="nav_headline"></li>
            {navItems.map((item, index) => {
              const variantsNaviItem = {
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 + 0.2 * index },
                },
                closed: { opacity: 0, y: 100 },
              };
              return (
                <motion.li key={item.id} variants={variantsNaviItem}>
                  <a href={item.href}>{item.title}</a>
                </motion.li>
              );
            })}
          </aside>
        </motion.nav>

        <aside className="navs pc">
          <ul>
            {navItems.map((item, index) => {
              // const variantsNaviItem = {
              //   open: {
              //     opacity: 1,
              //     y: 0,
              //     transition: { delay: 0.3 + 0.2 * index },
              //   },
              //   closed: { opacity: 0, y: 100 },
              // };
              return (
                // <motion.li key={item.id} variants={variantsNaviItem}>
                <li>
                  <a href={item.href}>{item.title}</a>
                </li>
                // </motion.li>
              );
            })}
            <li>
              <DropdownMenu />
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LanguageDropdown
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <a className="language" onClick={toggleMenu} style={{ fontSize: "25px" }}>
        <LanguageIcon size={30} />
      </a>
      {isOpen && (
        <ul className="l_list">
          <li>
            <a href="/">한국어</a>
          </li>
          <li>
            <a href="/">English</a>
          </li>
          <li>
            <a href="/">日本語</a>
          </li>
        </ul>
      )}
    </LanguageDropdown>
  );
};

const LanguageDropdown = styled.div`
  position: relative;
  //   padding: 0 !important;

  a {
    position: relative;
    top: 6px;
  }
  .l_list {
    background: #fff;
    position: absolute;
    bottom: -120px;
    left: -30px;
    width: 120px;

    text-align: center;
    padding: 10px !important;
    padding-bottom: 20px !important;
    border: 1px solid grey;
    border-radius: 3px;
    li {
      width: 100%;
      a {
        color: black !important;
        padding: 0 !important;
        font-weight: 400 !important;
      }
      a:hover {
        font-weight: 600 !important;
      }
    }
  }
`;

export default Header;
