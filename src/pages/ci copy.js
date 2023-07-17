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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import FeaturesSectionOne from "components/FeaturesSectionOne";
import FeaturesSectionTwo from "components/FeaturesSectionTwo";
import FeaturesSectionThree from "components/FeaturesSectionThree";

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
          {/* <HeaderOne /> */}
          <CommonSubHeader title="CI" />
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <div className="sub_inner">
              <img className="only_pc" src={PcCi} alt="ci" />
              <img className="only_mobile" src={MobileCi1} alt="ci" />
              <img className="only_mobile" src={MobileCi2} alt="ci" />
            </div>
          </Card>
          <MKBox pt={6} px={1} mt={6}>
            <DefaultFooter content={footerRoutes} />
          </MKBox>
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
