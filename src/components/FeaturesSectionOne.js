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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
function FeaturesSectionOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1} style={{ color: "black" }}>
              Software Platform Business
            </MKTypography>
            <MKTypography
              variant="body2"
              mb={2}
              style={{ color: "black", fontWeight: 400, fontSize: "16px", letterSpacing: 1 }}
            >
              글린트비전은 혁신적인 IT기술을 통해 창조적인 가치를 제공하고 있습니다. 우리의 플랫폼은
              다양한 개발자와 파트너를 유치하여 독특한 생태계를 형성하며, 네트워크 효과와 경제적
              이점을 제공합니다. 우리의 목표는 고객들에게 혁신적인 솔루션과 뛰어난 사용자 경험을
              제공하는 동시에, 파트너들과의 협력을 통해 시너지를 창출하는 것입니다.
            </MKTypography>
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              <a href="/detail/it">
                <MKButton variant="contained" color="info" style={{ fontSize: "14px" }}>
                  자세히보기 <Icon>arrow_forward</Icon>
                </MKButton>
              </a>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
                src="https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg"
                alt=""
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesSectionOne;
