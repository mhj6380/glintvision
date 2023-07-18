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
          <CommonSubHeader title="IT" />
          <div style={{ background: `url(${Background})`, color: "#fff" }}>
            <div className="inner">
              <div className="info1">
                <div className="page_title">GLINT VISION GROUP</div>
                <p className="info_desc mb" dangerouslySetInnerHTML={{ __html: t("text178") }}></p>
              </div>

              <Item
                thumbnail={null}
                title="LINK LINE"
                desc="Global Messenger Platform"
                info={[
                  { title: t("text179") },
                  {
                    title: t("text180"),
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  { title: t("text181") },
                  { title: t("text182") },
                ]}
              />

              <Item
                thumbnail={Lovelink}
                title="LOVE LINK"
                desc="Random Chatting Platform"
                info={[
                  { title: t("text183") },
                  {
                    title: t("text180"),
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  { title: t("text181") },
                  { title: t("text182") },
                ]}
              />
              <Item
                thumbnail={null}
                title="LIVE LINK"
                desc="On-line Meeting Platform"
                info={[
                  { title: t("text184") },
                  {
                    title: t("text180"),
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  { title: t("text181") },
                  { title: t("text182") },
                ]}
              />
              <Item
                thumbnail={Auditionlink}
                title="AUDITION LINK"
                desc="Entertainment Platform"
                info={[
                  {
                    title: t("text186"),
                    child: [
                      "Text to Text",
                      "Voice to Text",
                      "Voice to Voice",
                      "AI Voice Selecting Technology",
                    ],
                  },
                  {
                    title: t("text185"),
                  },
                  { title: t("text182") },
                ]}
              />
              <Item
                thumbnail={Ventures}
                title="VENTURES NETWORK"
                desc="AD & Donation Platform"
                info={[
                  {
                    title: t("text187"),
                  },
                  {
                    title: t("text182"),
                    child: [t("text188")],
                  },
                  {
                    title: t("text189"),
                    child: [t("text190")],
                  },
                  {
                    title: t("text191"),
                    child: [t("text192")],
                  },
                  {
                    title: t("text193"),
                    child: [t("text194"), t("text195")],
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
