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
import MKButton from "components/MKButton";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesSectionOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }} style={{ background: "#ededed" }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <Stack>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
                src="https://cdn.pixabay.com/photo/2014/10/15/22/17/apple-490485_1280.jpg"
                alt=""
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <MKTypography variant="h3" my={1} style={{ color: "black" }}>
              Mobile Device Business
            </MKTypography>
            <MKTypography
              variant="body2"
              mb={2}
              style={{ color: "black", fontWeight: 400, fontSize: "16px", letterSpacing: 1 }}
            >
              전문적인 휴대폰 생산 및 동남아시아와 아프리카 지역으로의 효율적인 유통을 담당하고
              있습니다. 최고 품질의 제품을 생산하며, 글로벌 네트워크를 통해 안정적이고 신속한 배송을
              보장합니다. 우리의 목표는 신뢰성 있는 제품과 우수한 서비스를 통해 고객의 만족을
              최우선으로 채우는 것입니다. 동남아시아와 아프리카에서 우리와 함께 성장하고
              협력해보세요.
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
              <a href="/detail/phone">
                <MKButton variant="contained" color="info" style={{ fontSize: "14px" }}>
                  자세히보기 <Icon>arrow_forward</Icon>
                </MKButton>
              </a>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesSectionOne;
