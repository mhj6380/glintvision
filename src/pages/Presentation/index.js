/* eslint-disable */

import MainVideoV2 from "assets/videos/main2.mp4";
import GvPlatformLong from "assets/videos/gv_platform_long.mp4";
import CashPhoneVideo from "assets/videos/cashphone.mp4";
import ContactBannerImg from "assets/contact_banner.png";
import PendingMain from "assets/pending_main.png";
import MainPoster from "assets/main_poster.png";
import MainPoster1 from "assets/main_poster1.png";
import MainPoster2 from "assets/main_poster2.png";
import MainPoster3 from "assets/main_poster3.png";

import Layout from "components/Layout";
import CountUp from "react-countup";
import Icon from "@mui/material/Icon";
import { useTranslation } from "react-i18next";
// Images
// import bgImage from "assets/images/bg-presentation.jpg";

// 동영상URL
// Cashphone:  https://venturesdonation.s3.ap-northeast-2.amazonaws.com/glintvision/Cashphone_03_720p.mp4

function Presentation() {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <>
          <div className="main_sec1">
            {/* 1: 영상 2:이미지 */}
            <div className="src_box">
              <video
                // src={MainVideoV2}
                src="https://venturesdonation.s3.ap-northeast-2.amazonaws.com/glintvision/Copy+of++GV_Intro_04_2160p_1080p.mp4"
                loop
                autoPlay
                // playsinline
                muted
                maxWidth="100%"
                poster={MainPoster}
              ></video>
            </div>
            {/* <div className="black_filter"></div> */}

            <a className="scrolldown no_mobile">
              <span></span>SCROLL DOWN<h1></h1>
            </a>
          </div>
          <div className="inner">
            <div className="values_box no_pc">
              <div className="values values1">
                <div className="values_label">PARTNER</div>
                <div className="values_value">
                  <span className="value">
                    <CountUp start={0} end={30} delay={0} duration={3}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </span>
                  <span className="unit">+</span>
                </div>
                <div className="values_desc no_mobile">{t("text1")}</div>
              </div>
              <div className="values values2">
                <div className="values_label">USER</div>
                <div className="values_value">
                  <span className="value">
                    <CountUp start={0} end={1000} delay={0} duration={0.5}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </span>
                  <span className="unit">M+</span>
                </div>
                <div className="values_desc no_mobile">{t("text2")}</div>
              </div>
              <div className="values values3">
                <div className="values_label">VALUE</div>
                <div className="values_value">
                  <span className="unit">No.</span>
                  <span className="value">
                    <CountUp start={0} end={1} delay={0} duration={3}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </span>
                  <span className="unit">+</span>
                </div>
                <div className="values_desc no_mobile">{t("text3")}</div>
              </div>
            </div>

            <div className="values_box no_mobile no_tablet">
              <div className="values values1">
                <div className="values_value">
                  <span className="value">
                    <CountUp start={0} end={30} delay={0} duration={3}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </span>
                  <span className="unit">+</span>
                </div>
                <div className="values_label">PARTNER</div>
                <div className="values_desc no_mobile">{t("text1")}</div>
              </div>
              <div className="values values2">
                <div className="values_value">
                  <span className="value">
                    <CountUp start={0} end={1000} delay={0} duration={0.5}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </span>
                  <span className="unit">M+</span>
                </div>
                <div className="values_label">USER</div>
                <div className="values_desc no_mobile">{t("text2")}</div>
              </div>
              <div className="values values3">
                <div className="values_value">
                  <span className="unit">No.</span>
                  <span className="value">
                    <CountUp start={0} end={1} delay={0} duration={3}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </span>
                  <span className="unit">+</span>
                </div>
                <div className="values_label">VALUE</div>
                <div className="values_desc no_mobile">{t("text3")}</div>
              </div>
            </div>
          </div>
          <div className="inner">
            <div className="page_title page_title_main left">GLINT VISION</div>
          </div>

          <div className="video_content_sec theme1">
            <div className="inner">
              <div className="video-wrapper">
                <video src={GvPlatformLong} loop autoPlay muted poster={MainPoster1}></video>
              </div>
              <div className="info right_yellow">
                <div className="title">GLOBAL PLATFORM BUSINESS</div>
                <div className="desc ">{t("text4")}</div>
                <a className="more_btn" href="/detail/platform">
                  More <Icon>arrow_forward</Icon>
                </a>
              </div>
            </div>
          </div>

          <div className="video_content_sec greyback">
            <div className="inner theme2">
              <div className="video-wrapper">
                <video src={CashPhoneVideo} loop autoPlay muted poster={MainPoster2}></video>
              </div>
              <div className="info left_yellow">
                <div className="title">MOBILE DEVICE BUSINESS</div>
                <div className="desc">{t("text5")}</div>
                <a className="more_btn" href="/detail/phone">
                  More <Icon>arrow_forward</Icon>
                </a>
              </div>
            </div>
          </div>

          <div className="video_content_sec greyback">
            <div className="inner theme1">
              <div className="video-wrapper">
                <video src={null} loop autoPlay muted poster={PendingMain}></video>
              </div>
              <div className="info right_yellow">
                <div className="title">MARKETING COMMUNICATION</div>
                <div className="desc">{t("text6")}</div>
                <a className="more_btn" href="/detail/marketing">
                  More <Icon>arrow_forward</Icon>
                </a>
              </div>
            </div>
          </div>
          <div className="inner">
            <div
              className="contact_banner"
              style={{ background: `url(${ContactBannerImg})`, backgroundSize: "100% 100%" }}
            >
              <div className="title">{t("text7")}</div>
              <div className="desc">
                {t("text8")}
                <br className="no_mobile" />
                {t("text9")}
              </div>
              <a href="/contact" className="more_btn">
                {t("text10")}
              </a>
            </div>
          </div>
          {/* <FeaturesSectionOne />
          <FeaturesSectionTwo />
          <FeaturesSectionThree /> */}
          {/* <Download /> */}
        </>
      </Layout>
    </>
  );
}

export default Presentation;
