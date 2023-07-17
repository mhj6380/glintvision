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
              Marketing Business
            </MKTypography>
            <MKTypography
              variant="body2"
              mb={2}
              style={{ color: "black", fontWeight: 400, fontSize: "16px", letterSpacing: 1 }}
            >
              온오프라인 통합 마케팅을 통해 고객들에게 더 나은 경험을 제공합니다. 디지털 전략과
              현장의 힘을 결합하여 체계적인 마케팅을 실현하며, 효과적인 커뮤니케이션과 최적의 결과를
              도출합니다. 우리와 함께하면 현대적인 마케팅 트렌드에 따라 변화하는 시장에서 높은
              성과를 이끌어낼 수 있습니다.
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
              <a href="/detail/marketing">
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
                src="https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_1280.jpg"
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
