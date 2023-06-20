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
              어떤 내용을 입력하면 좋을지 정해주세요 어떤 내용을 입력하면 좋을지 정해주세요 어떤
              내용을 입력하면 좋을지 정해주세요 어떤 내용을 입력하면 좋을지 정해주세요 어떤 내용을
              입력하면 좋을지 정해주세요
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
                style={{ width: "100%", height: "100%" }}
                src="https://cdn.pixabay.com/photo/2017/08/02/21/01/macbook-2573421_1280.jpg"
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
