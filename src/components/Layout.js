/* eslint-disable */
import React from "react";
import Header from "components/Header";

const Layout = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const value = window.scrollY;
      // console.log(value);
      setScrollY(value);
    });
  }, []);

  return (
    <div>
      <Header scrollY={scrollY} />
      {children}
    </div>
  );
};

export default Layout;
