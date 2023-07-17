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
          <CommonSubHeader title="PLATFORM" />
          <div className="inner">
            <div className="info1">
              <div className="page_title">SERVICE</div>
              <p className="info_title">GV 리워드 서비스란?</p>
              <p className="info_desc">
                바쁘게 살아가는 현대인들의 시간을 혜택으로 보상하는 신개념 리워드 서비스입니다.
              </p>
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
              <div className="info2_ment">
                GLINT CISION만의 사운드 태그 기술은 기계만 감지하는
                <br className="no_mobile" />
                [비가청음파]로 정보를 전달하여 주변 환경의 영향을 받지 않고{" "}
                <br className="no_mobile" />
                반경 최대 3KM내의 최대 30만 개의 신호를 동시에 인식할 수 있습니다.
                <br />
                <br />
                [GV ZONE] 내에 진입하여 광고를 시청하면 번거로운 <br className="no_mobile" />
                인증 없이 자동으로 시청 시간이 감지됩니다.
              </div>
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
                <div className="info3_title">실감미디어 광고</div>
                <div className="info3_ment">
                  탁월한 3D 실감 미디어 광고를 제작하여
                  <br />
                  몰입도 높은 시각적 즐거움을 제공합니다.
                </div>
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
              <div className="info4_title">최적화된 광고 송출 환경</div>
              <div className="info4_ment">
                한국 옥외 LED 광고 매체의 1/3을 보유 및 대행하여
                <br />
                광고 콘텐츠를 최적화된 환경에서 송출할 수 있습니다.
              </div>
            </div>
          </div>

          <div className="inner">
            <div className="info5 platform_info5">
              <div className="page_title">ECOSYSTEM</div>
              <div className="video-wrapper">
                <video src={GvPlatformLong} loop autoPlay muted poster={MainPoster1}></video>
              </div>
              <img className="platform_left" src={Pu0} alt="PlatformUse2" />
              <p className="ment platform_right">
                적립한 포인트는 GV앱에서
                <br />
                K-STAR 굿즈 및 다양한 제품을 구매하거나,
                <br />
                간편결제 서비스의 전자 머니로 충전하여
                <br />
                일본 전역의 가맹점에서 현금처럼 사용할 수 있습니다.
              </p>
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
