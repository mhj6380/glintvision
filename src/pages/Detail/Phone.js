/* eslint-disable */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import Layout from "components/Layout";
// @mui material components
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import PcCi from "assets/pc_ci.png";
import MobileCi1 from "assets/mobile_ci1.png";

import CommonSubHeader from "components/CommonSubHeader";
import CashphoneVideo from "assets/videos/cashphone.mp4";
import Phone1 from "assets/phone1.png";
import Phone2 from "assets/phone2.png";
import MainPoster2 from "assets/main_poster2.png";
// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
const bgImage = "https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <Layout>
        <>
          <CommonSubHeader title="MOBILE" />
          <div>
            <div className="large-video-wrapper">
              <video src={CashphoneVideo} loop autoPlay muted poster={MainPoster2}></video>
            </div>
            <div className="inner">
              <div className="info1">
                <div className="page_title">MOBILE DEVICE BUSINESS</div>
                <p className="info_desc mb">
                  글린트비전이 제조하는 휴대폰 'Cash Phone'은 광고비와 유통비용의 거품을 없애
                  <br className="no_mobile" />
                  최고의 품질 및 기능의 제품을 최저의 가격으로 제공합니다.
                </p>
                <p className="impact_title">CASH PHONE GV-10 PRO 5G</p>
                <br />
                <br />
                <div className="padding flex_img_group">
                  <img className="img1" src={Phone1} alt="Phone1" />
                  <br />
                  <br />
                  <img className="phone_spec_img" src={Phone2} alt="Phone1" />
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}

export default Presentation;
