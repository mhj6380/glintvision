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

// Images
import bgImage from "assets/images/bg-coworking.jpeg";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <Layout>
        <>
          <HeaderOne />
          {/* <DefaultNavbar
        brand={
          <img
            src="https://cdn.pixabay.com/photo/2017/08/02/21/01/macbook-2573421_1280.jpg"
            style={{ height: 30 }}
            alt="logo"
          />
        }
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          // color: "info",
        }}
      /> */}

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
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
              하이테크 기반 광고 플랫폼 회사입니다.
            </MKTypography>
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
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Material Design
            </MKTypography>
            <MKButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <MKBox component="i" color="white" className="fas fa-bars" />
            </MKButton>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-twitter" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-facebook" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-instagram" />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
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
      >
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
              Material Kit
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white">Get Started</MKButton>
              <MKButton variant="text" color="white">
                Read more
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Presentation;
