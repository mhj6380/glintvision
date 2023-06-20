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
// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <Layout>
        <>
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
          <MKBox
            minHeight="75vh"
            width="100%"
            sx={{
              // backgroundImage: `url(${bgImage})`,
              backgroundImage: `url(https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "75vh",
                background: "rgba(0,0,0,0.85)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></div>
            <Container>
              <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                <MKTypography
                  variant="h1"
                  color="white"
                  mt={-6}
                  mb={1}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  GLINT VISION{" "}
                </MKTypography>
                <MKTypography
                  variant="body1"
                  color="white"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                >
                  GLINT VISION은 온/오프라인 광고 콘텐츠 및 IP/BRAND 사업 분야의 솔루션을 제공하는
                  하이테크 기반 광고 플랫폼 회사입니다.
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>

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
            <Counters />
            <FeaturesSectionOne />
            <FeaturesSectionTwo />
            <FeaturesSectionThree />

            {/* <Information />
        <DesignBlocks />
        <Pages /> */}
            {/* <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container> */}
            {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials /> */}
            <Download />
          </Card>
          <MKBox pt={6} px={1} mt={6}>
            <DefaultFooter content={footerRoutes} />
          </MKBox>
        </>
      </Layout>
    </>
  );
}

export default Presentation;
