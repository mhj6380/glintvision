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
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import footerRoutes from "footer.routes";
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
import Ceo1 from "assets/ceo1.png";
import Ceo2 from "assets/ceo2.png";
// import Sang1 from "assets/sang1.png";
// import Sang2 from "assets/sang2.png";
// import Sang3 from "assets/sang3.png";
// import Sang4 from "assets/sang4.png";
// import Sang5 from "assets/sang5.png";
import Sang1 from "assets/sangsu1.jpeg";
import Sang2 from "assets/sangsu2.jpeg";
import Sang3 from "assets/sangsu3.jpeg";
import Sang4 from "assets/sangsu4.jpeg";
import Sang5 from "assets/sangsu5.jpeg";
// import Loi1 from "assets/loi1.png";
// import Loi2 from "assets/loi2.png";
// import Loi3 from "assets/loi3.png";
// import Loi4 from "assets/loi4.png";
// import Loi5 from "assets/loi5.png";

import Loi1 from "assets/loisu1.jpeg";
import Loi2 from "assets/loisu2.jpeg";
import Loi3 from "assets/loisu3.jpeg";
import Loi4 from "assets/loisu4.jpeg";
import Loi5 from "assets/loisu5.jpeg";
import Loi6 from "assets/loisu6.jpeg";

// import Th1 from "assets/th1.png";
// import Th2 from "assets/th2.png";
// import Th3 from "assets/th3.png";
// import Th4 from "assets/th4.png";
// import Th5 from "assets/th5.png";
// import Th6 from "assets/th6.png";
import Th1 from "assets/thsu1.png";
import Th2 from "assets/thsu2.png";
import Th3 from "assets/thsu3.jpeg";
import Th4 from "assets/thsu4.jpeg";
import Th5 from "assets/thsu5.jpeg";
import Th6 from "assets/thsu6.jpeg";
import ThHistory from "assets/thhistory.png";
import React from "react";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
const bgImage = "https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  const sec2Ref = React.useRef(null);

  React.useEffect(() => {
    sec2Ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Layout>
        <>
          <CommonSubHeader title="COMPANY" />
          <div className="inner">
            <div className="info0" id="sec1">
              <div className="page_title c_page_title">CHAIRMAN & CEO</div>
              <div className="ceo_list">
                <div className="ceo ceo1">
                  <img className="ceo_img ceo_img1" src={Ceo1} alt="CompanyImg1" />
                  <div className="text">
                    <span className="attr">CHAIRMAN</span>
                    <span className="name">금중필</span>
                  </div>
                </div>
                <div className="ceo ceo2">
                  <img className="ceo_img ceo_img2" src={Ceo2} alt="CompanyImg2" />
                  <div className="text">
                    <span className="attr">CEO</span>
                    <span className="name">고태욱</span>
                  </div>
                </div>
              </div>
              <div className="info">
                <p className="ceo_title">함께 만들어가는 기업</p>
                <p className="info_desc">
                  4차산업 지식정보화 사회의 급속한 변화에 따라 다양화 되어가는 미디어의 진화와 이에
                  따른 기업과 소비자
                  <br className="no_mobile" />
                  커뮤니케이션 활동을 선도하고 저희 글린트비전그룹은 미래를 위한 새로운 가치를
                  발견해 나가는
                  <br className="no_mobile" />
                  종합 마케팅 & 커뮤니케이션 그룹을 지향하고 있습니다.
                  <br />
                  <br />
                  기업 비전과 가치 철학을 통해 글린트비전그룹은 글로벌 시장을 무대로 끊임없는 글로벌
                  경쟁력 강화를 통해 해외 시장 영역을 점차 확대해 나가고 있으며 미래 가치를 창출하는
                  글로벌 리더로 성장해 나아갈 것입니다.
                  <br />
                  <br />
                  감사합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="inner">
            <div className="info1" id="sec2" ref={sec2Ref}>
              <div className="page_title">INTRODUCTION</div>
              <p className="info_title">"당신을 위한 맞춤형 광고 플랫폼"</p>
              <p className="info_desc">
                GV는 온/오프라인 광고 콘텐츠 및 IP / BRAND
                <br />
                사업 분야의 솔루션을 제공하는 하이테크 기반 광고 플랫폼 회사입니다.
              </p>
              <img className="company_img1" src={CompanyImg1} alt="CompanyImg1" />
              <img className="company_img2" src={CompanyImg2} alt="CompanyImg2" />
            </div>
          </div>
          <div className="info2">
            <div className="inner" id="sec3">
              <div className="page_title">VISION & GOAL</div>
              <div className="page_sub_title">글로벌 마케팅 커뮤니케이션 컴퍼니</div>
              <img className="company_info2_img" src={CompanyInfo2} alt="CompanyImg2" />
            </div>
          </div>
          <div className="info3">
            <div className="inner" id="sec4">
              <div className="page_title mb2">CORPORATE IDENTITY</div>
              <img className="company_info3_img" src={Company3} alt="CompanyImg2" />

              <p className="page_ment">
                <b>GV</b>의 아이덴티티는 ‘빛’으로부터 기원합니다.
                <br className="no_mobile" />
                <b>GLINT VISION</b>의 영문 이니셜 ‘<b>G</b>’를 밝게 타오르는 불꽃의 모습으로
                형상화하고,
                <br className="no_mobile" />
                무한한 활동성을 상징하는 오렌지색을 통해 업계를
                <br className="no_mobile" />
                선도하면 가장 밝게 빛나고자 하는 <b>GLINT VISION</b>의 기업 의지를 표현하였습니다.
              </p>
            </div>
          </div>
          <div className="info4" id="sec6">
            <div className="inner">
              <div className="page_title">ORGANIZATION</div>
              <img className="company_info4_img" src={Company4} alt="CompanyImg2" />
            </div>
          </div>
          {/* <div className="info5" id="sec5">
            <div className="inner">
              <div className="page_title">수상</div>
              <div className="sang_list">
                <div className="sang_item">
                  <img src={Sang1} alt="CompanyImg2" />
                </div>
                <div className="sang_item">
                  <img src={Sang2} alt="CompanyImg2" />
                </div>
                <div className="sang_item">
                  <img src={Sang3} alt="CompanyImg2" />
                </div>
                <div className="sang_item">
                  <img src={Sang4} alt="CompanyImg2" />
                </div>
                <div className="sang_item">
                  <img src={Sang5} alt="CompanyImg2" />
                </div>
              </div>
            </div>
          </div>
          <div className="info5">
            <div className="inner">
              <div className="page_title">LOI & MOU</div>
              <div className="th_list">
                <div className="th_item">
                  <img src={Loi1} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Loi2} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Loi3} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Loi4} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Loi5} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Loi6} alt="CompanyImg2" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="info5">
            <div className="inner">
              <div className="page_title">특허</div>
              <div className="th_list">
                <div className="th_item">
                  <img src={Th1} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Th2} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Th3} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Th4} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Th5} alt="CompanyImg2" />
                </div>
                <div className="th_item">
                  <img src={Th6} alt="CompanyImg2" />
                </div>
              </div>
            </div>
          </div>
          <div className="info5">
            <div className="inner">
              <div className="page_title">특허현황</div>
              <img className="th_history" src={ThHistory} alt="CompanyImg2" />
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}

function HeaderOne() {
  return (
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
          }}
        ></div>
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Software Platform Business
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              혁신적인 IT기술을 통해 창조적인 가치를 제공하고 있습니다. 우리의 플랫폼은 다양한
              개발자와 파트너를 유치하여 독특한 생태계를 형성하며, 네트워크 효과와 경제적 이점을
              제공합니다. 우리의 목표는 고객들에게 혁신적인 솔루션과 뛰어난 사용자 경험을 제공하는
              동시에, 파트너들과의 협력을 통해 시너지를 창출하는 것입니다.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white">참고 자료 다운로드</MKButton>
              {/* <MKButton variant="text" color="white">
                Read more
              </MKButton> */}
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Presentation;
