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
      <div className="footer">
        <div>주식회사 글린트비전그룹</div>
        <div>서울특별시 강남구 봉은사로72길 13-1, GV HOUSE</div>
        <div>TEL : +82 1600 8888 MAIL : info@glintvision.io</div>
        <br />
        <div>COPYRIGHT ⓒ 2023 GLINT VISION GROUP CO., LTD. ALL RIGHTS RESERVED.</div>
        {/* <a>이용약관</a> */}
        {/* <a>개인정보처리방침</a> */}
      </div>
    </div>
  );
};

export default Layout;
