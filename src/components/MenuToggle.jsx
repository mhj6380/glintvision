/* eslint-disable */

import * as React from "react";
// import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";

export const MenuToggle = ({ toggle, open }) => (
  <button className="main_toggle" onClick={toggle}>
    <Hamburger color={open ? "#000" : "#fff"} />
  </button>
);
