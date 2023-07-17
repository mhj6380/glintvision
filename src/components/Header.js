/* eslint-disable */

import React from "react";
import { MenuToggle } from "./MenuToggle";
import { motion } from "framer-motion";
import LanguageIcon from "@mui/icons-material/Language";
import styled from "styled-components";
import "global.scss";
import "glint.scss";
import LogoWhite from "assets/logo.png";
import LogoBlack from "assets/logo.png";
const navItems = [
  {
    id: 0,
    title: "Company",
    href: "/ci",
    // children: [
    //   {
    //     id: 1,
    //     title: "Chairman & CEO",
    //     href: "/ci#sec1",
    //   },
    //   {
    //     id: 1,
    //     title: "Introduction",
    //     href: "/ci#sec2",
    //   },
    //   {
    //     id: 1,
    //     title: "Vision & Goal",
    //     href: "/ci#sec3",
    //   },
    //   {
    //     id: 1,
    //     title: "CI",
    //     href: "/ci#sec4",
    //   },
    //   {
    //     id: 1,
    //     title: "Documents",
    //     href: "/ci#sec5",
    //   },
    //   {
    //     id: 1,
    //     title: "Organization",
    //     href: "/ci#sec6",
    //   },
    // ],
  },
  {
    id: 1,
    title: "GV Platform",
    href: "/detail/platform",
    // children: [
    //   {
    //     id: 1,
    //     title: "Service",
    //     href: "/detail/platform#sec1",
    //   },
    //   {
    //     id: 1,
    //     title: "Ecosystem",
    //     href: "/detail/platform#sec2",
    //   },
    // ],
  },
  {
    id: 2,
    title: "Marketing",
    href: "/detail/marketing",
    // children: [
    //   {
    //     id: 1,
    //     title: "Process",
    //     href: "/detail/marketing#sec1",
    //   },
    //   {
    //     id: 1,
    //     title: "On-line",
    //     href: "/detail/marketing#sec2",
    //   },
    //   {
    //     id: 1,
    //     title: "Off-line",
    //     href: "/detail/marketing#sec3",
    //   },
    //   {
    //     id: 1,
    //     title: "IP & Brand",
    //     href: "/detail/marketing#sec4",
    //   },
    // ],
  },
  {
    id: 3,
    title: "IT",
    href: "/detail/it",
    // children: [
    //   {
    //     id: 1,
    //     title: "Global Messenger",
    //     href: "/detail/it#sec1",
    //   },
    //   {
    //     id: 2,
    //     title: "Random Chatting",
    //     href: "/detail/it#sec2",
    //   },
    //   {
    //     id: 3,
    //     title: "On-line Meeting",
    //     href: "/detail/it#sec3",
    //   },
    //   {
    //     id: 4,
    //     title: "Entertainment",
    //     href: "/detail/it#sec4",
    //   },
    //   {
    //     id: 5,
    //     title: "AD & Donation",
    //     href: "/detail/it#sec5",
    //   },
    // ],
  },
  {
    id: 3,
    title: "Cash Phone",
    href: "/detail/phone",
  },
  // {
  //   id: 3,
  //   title: "Partners",
  //   href: "/detail/partners",
  // },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

// const navItems = [
//   {
//     id: 0,
//     title: "GV",
//     href: "#",
//     children: [
//       {
//         id: 1,
//         title: "CI",
//         href: "/ci",
//       },
//       {
//         id: 1,
//         title: "Team",
//         href: "/team",
//       },
//     ],
//   },
//   {
//     id: 1,
//     title: "휴대폰 사업",
//     href: "/detail/phone",
//   },
//   {
//     id: 2,
//     title: "마케팅 사업",
//     href: "/detail/marketing",
//     children: [
//       {
//         id: 1,
//         title: "Marketing Service",
//         href: "/marketing_service",
//       },
//       {
//         id: 2,
//         title: "사용방법",
//         href: "/marketing_manual",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "IT 사업",
//     href: "/detail/it",
//   },
//   {
//     id: 4,
//     title: "제휴문의",
//     href: "/contact",
//   },
// ];
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
          <img className="site-logo white" src={LogoWhite} alt="cubelean" />
        </a>
        <a href="/">
          <img className="site-logo black" src={LogoBlack} alt="cubelean" />
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
                <li className="parant_menu">
                  <a href={item.href}>{item.title}</a>
                  {item.children && (
                    <ul className="sub_menus">
                      {item.children.map((it) => (
                        <li>
                          <a href={it.href}>{it.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
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
