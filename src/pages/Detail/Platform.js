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
import Layout from "components/Layout";
import CommonSubHeader from "components/CommonSubHeader";
import Platform1 from "assets/platform1.png";
import Platform2 from "assets/platform_point.png";
import Platform3 from "assets/platform3.png";
import Platform4 from "assets/videos/승리호.mp4";
import Platform5 from "assets/platform5.png";
import GvPlatformLong from "assets/videos/gv_platform_long.mp4";
import Pu0 from "assets/pu0.png";
import Pu1 from "assets/pu1.png";
import Pu2 from "assets/pu2.png";
import Korea1 from "assets/korea1.png";
import Korea2 from "assets/korea2.png";
import Korea3 from "assets/korea3.png";
import Japan1 from "assets/japan1.png";
import Japan2 from "assets/japan2.png";
import PlatBack from "assets/plat_back.png";

import MainPoster1 from "assets/main_poster1.png";
import MainPoster2 from "assets/main_poster2.png";
import MainPoster3 from "assets/main_poster3.png";
import { useTranslation } from "react-i18next";
// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
const bgImage = "https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <>
          <CommonSubHeader title="PLATFORM" />
          <div className="inner">
            <div className="info1">
              <div className="page_title">SERVICE</div>
              <p className="info_title">{t("text21")}</p>
              <p className="info_desc">{t("text22")}</p>
              <img className="platform_img1" src={Platform1} alt="CompanyImg1" />
              <img className="platform_img2" src={Platform2} alt="CompanyImg2" />
            </div>
          </div>
          <div
            className="info2 platform_info2"
            style={{
              backgroundImage: `url(${Platform3})`,
              backgroundColor: "rgba(0,0,0,0.92)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inner">
              <div className="info2_title">SOUND TAG</div>
              <div className="info2_ment" dangerouslySetInnerHTML={{ __html: t("text23") }}></div>
            </div>
          </div>

          <div
            className="info3 no_padding platform_info3"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="black-filter"></div>
            <div className="background-video-wrapper">
              <video src={Platform4} loop autoPlay muted poster={MainPoster3}></video>
              <div className="inner align-center">
                <div className="info3_title">{t("text24")}</div>
                <div className="info3_ment" dangerouslySetInnerHTML={{ __html: t("text25") }}></div>
              </div>
            </div>
          </div>
          <div
            className="info4 platform_info4"
            style={{
              background: `url(${Platform5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inner">
              <div className="info4_title">{t("text26")}</div>
              <div className="info4_ment" dangerouslySetInnerHTML={{ __html: t("text27") }}></div>
            </div>
          </div>

          <div className="inner">
            <div className="info5 platform_info5">
              <div className="page_title">ECOSYSTEM</div>
              <div className="video-wrapper">
                <video src={GvPlatformLong} loop autoPlay muted poster={MainPoster1}></video>
              </div>
              <img className="platform_left" src={Pu0} alt="PlatformUse2" />
              <p
                className="ment platform_right"
                dangerouslySetInnerHTML={{ __html: t("text28") }}
              ></p>
              <img className="platform_use1" src={Pu1} alt="PlatformUse2" />
              <img className="platform_use2" src={Pu2} alt="PlatformUse2" />
              <img className="platform_back" src={PlatBack} alt="PlatformUse2" />
            </div>
            <div className="info6 platform_info6">
              <div className="page_title">KOREA</div>
              <img src={Korea1} alt="PlatformUse2" />
              <img src={Korea2} alt="PlatformUse2" />
              <img src={Korea3} alt="PlatformUse2" />
            </div>
            <div className="info7 platform_info7">
              <div className="page_title">JAPAN</div>
              <img src={Japan1} alt="PlatformUse2" />
              <img src={Japan2} alt="PlatformUse2" />
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}

export default Presentation;
