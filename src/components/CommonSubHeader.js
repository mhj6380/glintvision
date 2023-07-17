/* eslint-disable */
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PageHeaderBg from "assets/subheader.png";

const CommonSubHeader = ({ title }) => {
  return (
    <div
      className="page_sub_header"
      style={{
        backgroundImage: `url(${PageHeaderBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="inner">
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default CommonSubHeader;
