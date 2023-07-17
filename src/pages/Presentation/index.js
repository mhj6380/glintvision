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
                <div className="values_desc no_mobile">
                  30개 이상의 글로벌 기업과 파트너쉽을 체결
                </div>
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
                <div className="values_desc no_mobile">글로벌 유저 1,000만명 이상 확보</div>
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
                <div className="values_desc no_mobile">세계 최초∙최고 리워드 플랫폼</div>
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
                <div className="values_desc no_mobile">
                  30개 이상의 글로벌 기업과 파트너쉽을 체결
                </div>
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
                <div className="values_desc no_mobile">글로벌 유저 1,000만명 이상 확보</div>
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
                <div className="values_desc no_mobile">세계 최초∙최고 리워드 플랫폼</div>
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
                <div className="desc ">
                  글린트비전그룹은 혁신적인 IT 기술과 광고마케팅의 대한 노하우를 통해 창조적인
                  가치를 제공하고 있습니다. 우리의 플랫폼은 유저와 함께 만들어 나가는 플랫폼으로
                  생태계를 형성하고, 플랫폼간의 네트워크를 활성화 하여 유저 및 생태계를 공유 및
                  지원하여 보다 큰 혜택을 제공할 것입니다.
                </div>
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
                <div className="desc">
                  글린트비전이 제조하는 휴대폰 'Cash Phone'은 광고비와 유통비용의 거품을 없애 최고의
                  품질 및 기능의 제품을 최저의 가격으로 제공합니다. 자체 개발된 GV Platform, Love
                  Link, Ventures Network 등의 플랫폼 뿐만 아니라 각종 K-Contents가 탑재하여
                  소프트웨어와 하드웨어를 융합한 특화된 서비스를 제공합니다. 현재 동남아시아와
                  아프리카 지역의 여러 나라들과 OEM Business를 진행하고 있습니다.
                </div>
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
                <div className="desc">
                  온오프라인 통합 마케팅을 통해 고객들에게 더 나은 경험을 제공합니다. 디지털 전략과
                  현장의 힘을 결합하여 체계적인 마케팅을 실현하며, 효과적인 커뮤니케이션과 최적의
                  결과를 도출합니다. 우리와 함께하면 현대적인 마케팅 트렌드에 따라 변화하는 시장에서
                  높은 성과를 이끌어낼 수 있습니다.
                </div>
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
              <div className="title">GLINT VISION과 협력하고 싶으신가요?</div>
              <div className="desc">
                제휴 문의 환영합니다! 우리와 함께 협력하여 상호 발전을 이루어봐요.
                <br className="no_mobile" />
                함께 협력하면 더 큰 가치를 창출할 수 있습니다. 언제든지 연락주세요!
              </div>
              <a href="/contact" className="more_btn">
                제휴문의
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
