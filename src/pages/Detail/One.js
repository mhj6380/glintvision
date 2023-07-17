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

import MobileCi2 from "assets/mobile_ci2.png";
import CommonSubHeader from "components/CommonSubHeader";
import PageHeaderBg from "assets/page-header.png";

import CompanyImg1 from "assets/company_1.png";
import CompanyImg2 from "assets/company_2.png";
import CompanyInfo2 from "assets/company_info2.png";
import Company3 from "assets/company3.png";
import Company4 from "assets/company4.png";
import Lovelink from "assets/videos/lovlink.mp4";
import Auditionlink from "assets/videos/auditionlink.mp4";
import Ventures from "assets/videos/ventures.mp4";
import Pending from "assets/pending.png";
import Background from "assets/it_background.png";

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
          <CommonSubHeader title="IT" />
          <div style={{ background: `url(${Background})`, color: "#fff" }}>
            <div className="inner">
              <div className="info1">
                <div className="page_title">GLINT VISION GROUP</div>
                <p className="info_desc mb">
                  GLINT VISION GROUP이 만드는 다양한 플랫폼은 기초가 되는 플랫폼
                  <br className="no_mobile" />
                  GV Platform과 연계하여 유저들에게 서비스를 제공할 것이며 또한 각
                  <br className="no_mobile" />
                  플랫폼간에도 서로 유저 및 생태계를 공유 및 지원 할 것입니다.
                </p>
              </div>

              <Item
                thumbnail={null}
                title="LINK LINE"
                desc="Global Messenger Platform"
                info={[
                  { title: "인도네시아 국민 모바일 메신저" },
                  {
                    title: "자체 개발된 실시간 번역기능",
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  { title: "영상채팅, 문자채팅" },
                  { title: "리워드 시스템" },
                ]}
              />

              <Item
                thumbnail={Lovelink}
                title="LOVE LINK"
                desc="Random Chatting Platform"
                info={[
                  { title: "글로벌 랜덤채팅앱" },
                  {
                    title: "자체 개발된 실시간 번역기능",
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  { title: "영상채팅, 문자채팅" },
                  { title: "리워드 시스템" },
                ]}
              />
              <Item
                thumbnail={null}
                title="LIVE LINK"
                desc="On-line Meeting Platform"
                info={[
                  { title: "글로벌 화상회의 및 온라인강의앱" },
                  {
                    title: "자체 개발된 실시간 번역기능",
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  { title: "영상채팅, 문자채팅" },
                  { title: "리워드 시스템" },
                ]}
              />
              <Item
                thumbnail={Auditionlink}
                title="AUDITION LINK"
                desc="Entertainment Platform"
                info={[
                  {
                    title: "글로벌 오디션앱",
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  {
                    title: "노래방기능",
                  },
                  { title: "리워드 시스템" },
                ]}
              />
              <Item
                thumbnail={Ventures}
                title="VENTURES NETWORK"
                desc="AD & Donation Platform"
                info={[
                  {
                    title: "글로벌 광고솔루션이 탑재된 도네이션앱",
                  },
                  {
                    title: "리워드 시스템",
                    child: ["기부문화 확대"],
                  },
                  {
                    title: "블록체인기술",
                    child: ["투명성 문제 해결"],
                  },
                  {
                    title: "DAO(분권화된 자율조직)",
                    child: ["기부자들의 투표를 통한 기부처 결정"],
                  },
                  {
                    title: "글로벌 광고 솔루션",
                    child: ["국가별 타케팅", "인플루언서 마케팅"],
                  },
                ]}
              />
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}

function Item({ thumbnail, title, desc, info }) {
  return (
    <div className="it_item">
      <div className="thumbnail">
        {thumbnail ? (
          <div className="video-wrapper">
            <video
              src={thumbnail}
              loop
              autoPlay
              muted
              // poster="https://bitclass.ai/img/thumb.png"
            ></video>
          </div>
        ) : (
          <div className="video-wrapper">
            <img src={Pending} alt="pending" />
          </div>
        )}
      </div>
      <div className="info">
        <div className="title">
          {title}
          <span></span>
        </div>
        <div className="desc">{desc}</div>
        <div className="info np">
          {info.map((item) => (
            <div className="info_parent">
              V {item.title}
              {item.child && (
                <>
                  {item.child.map((child) => (
                    <div className="info_child">- {child}</div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Presentation;
