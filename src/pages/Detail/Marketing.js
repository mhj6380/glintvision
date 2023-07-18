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

import Micon1 from "assets/micon1.svg";
import Micon2 from "assets/micon2.svg";
import Micon3 from "assets/micon3.svg";
import Micon4 from "assets/micon4.svg";
import Micon5 from "assets/micon5.svg";
import JjGroup from "assets/jjgroup.png";
import JjApp from "assets/jjapp.png";
import JjYoutube from "assets/jjyoutube.png";
import JjCommerce from "assets/jjcommerce.png";
import JjMarketing from "assets/JjMarketing.png";
import Jjcontents from "assets/Jjcontents.png";
import GmMedia from "assets/gm.png";
import GmContent from "assets/gmcontent.png";
import Dotmall from "assets/dotmall.png";
import Dettech1 from "assets/dottech1.png";
import Dettech2 from "assets/dottech2.png";
import Dotref1 from "assets/dotref1.png";
import Dotref2 from "assets/dotref2.png";
import Dotref3 from "assets/dotref3.png";
import Dotref4 from "assets/dotref4.png";
import DotTask from "assets/dottask.png";
import Project from "assets/project.png";
import ProjectList1 from "assets/project_list1.png";
import ProjectList2 from "assets/project_list2.png";
import ProjectList3 from "assets/project_list3.png";
import ProjectList4 from "assets/project_list4.png";
import JdSolution from "assets/JdSolution.png";
import Rnd1 from "assets/rnd1.png";
import Rnd2 from "assets/rnd2.png";
import Rnd3 from "assets/rnd3.png";
import Rnd4 from "assets/rnd4.png";
import Jepum1 from "assets/jepum1.png";
import Vision from "assets/vision.png";
import Led1 from "assets/led1.png";
import Led2 from "assets/led2.png";
import Bright from "assets/bright.png";
import Display1 from "assets/display1.png";
import Display2 from "assets/display2.png";
import Etc1 from "assets/etc1.png";
import Etc2 from "assets/etc2.png";
import Smg from "assets/smg.png";
import Smgproj1 from "assets/smgproj1.png";
import Smgproj2 from "assets/smgproj2.png";
import Smgproj3 from "assets/smgproj3.png";
import Partners from "assets/partners.png";
import { useTranslation } from "react-i18next";

// Images
// import bgImage from "assets/images/bg-coworking.jpeg";
const bgImage = "https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <>
          <CommonSubHeader title="MARKETING" />
          <div className="inner">
            <div className="info1 marketing_info1">
              <div className="page_title">PROCESS</div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon1} alt="Micon1" />
                </div>
                <span className="progress">Step1</span>
                <div className="title">{t("text29")}</div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: t("text30") }}></div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon2} alt="Micon2" />
                </div>
                <span className="progress">Step2</span>
                <div className="title">{t("text31")}</div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: t("text32") }}></div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon3} alt="Micon3" />
                </div>
                <span className="progress">Step3</span>
                <div className="title">{t("text33")}</div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: t("text34") }}></div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon4} alt="Micon4" />
                </div>
                <span className="progress">Step4</span>
                <div className="title">{t("text35")}</div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: t("text36") }}></div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon5} alt="Micon5" />
                </div>
                <span className="progress">Step5</span>
                <div className="title">{t("text37")}</div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: t("text38") }}></div>
              </div>
            </div>
          </div>
          <div className="info2 marketing_info2">
            <div className="inner">
              <div className="page_title">ON-LINE</div>
              <div className="dot_devider"></div>
              <div className="page_sub_title company_name">JJ GLOBAL GROUP</div>
              <div className="info_section">
                <div className="thumbnail mtplus">
                  <img src={JjGroup} alt="" />
                </div>
                <div className="info">
                  <div className="info_title">{t("text39")}</div>
                  <ul className="info_list">
                    <li>{t("text40")}</li>
                    <li>{t("text41")}</li>
                    <li>{t("text42")}</li>
                    <li>{t("text43")}</li>
                  </ul>

                  <div className="info_title">{t("text44")}</div>
                  <ul className="info_list">
                    <li>{t("text45")}</li>
                    <li>{t("text46")}</li>
                    <li>{t("text47")}</li>
                    <li>{t("text48")}</li>
                    <li>{t("text49")}</li>
                    <li>{t("text50")}</li>
                    <li>{t("text51")}</li>
                  </ul>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>APPLICATION</span>
                </div>
                <div className="thumbnail mtminus">
                  <img src={JjApp} alt="" />
                </div>
                <div className="info">
                  <div className="info_title ">{t("text52")}</div>
                  <ul className="info_list">
                    <li>{t("text53")}</li>
                    <li>{t("text54")}</li>
                    <li>{t("text55")}</li>
                    <li>{t("text56")}</li>
                    <li>{t("text57")}</li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="info_section half">
                  <div className="info_section_title">
                    <span>YOUTUBE</span>
                  </div>
                  <div className="thumbnail2">
                    <img src={JjYoutube} alt="" />
                  </div>

                  <div className="info">
                    <div className="info_title">{t("text58")}</div>
                    <div
                      className="info_content"
                      dangerouslySetInnerHTML={{ __html: t("text59") }}
                    ></div>
                  </div>
                </div>

                <div className="info_section half">
                  <div className="info_section_title">
                    <span>LIVE COMMERCE</span>
                  </div>
                  <div className="thumbnail2">
                    <img src={JjCommerce} alt="" />
                  </div>
                  <div className="info">
                    <div className="info_title">{t("text60")}</div>
                  </div>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>MARKETING</span>
                </div>
                <div className="info block center info-nopadding">
                  <div className="info_title center">{t("text61")}</div>
                  <div className="image">
                    <img src={JjMarketing} alt="" />
                  </div>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>{t("text177")}</span>
                </div>
                <div className="info block info-nopadding">
                  <div className="info_title center">{t("text62")}</div>
                  <div
                    className="info_content center"
                    dangerouslySetInnerHTML={{ __html: t("text63") }}
                  ></div>
                  <div className="image">
                    <img src={Jjcontents} alt="" />
                  </div>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>PARTNERS</span>
                </div>
                <div className="info block info-nopadding">
                  <div className="info_title center">{t("text64")}</div>
                  <div
                    className="info_content center"
                    dangerouslySetInnerHTML={{ __html: t("text65") }}
                  ></div>
                  <div className="image">
                    <img src={Partners} alt="" />
                  </div>
                </div>
              </div>
              <div className="dot_devider"></div>
              <div className="page_sub_title company_name">GLEAM MEDIA</div>
              <div className="info_section">
                <div className="thumbnail">
                  <img src={GmMedia} alt="" />
                </div>
                <div className="info">
                  <div className="info_title">{t("text39")}</div>
                  <ul className="info_list">
                    <li>{t("text66")}</li>
                    <li>{t("text67")}</li>
                    <li>{t("text68")}</li>
                    <li>{t("text69")}</li>
                  </ul>

                  <div className="info_title">{t("text44")}</div>
                  <ul className="info_list">
                    <li>{t("text70")}</li>
                    <li>{t("text71")}</li>
                    <li>{t("text72")}</li>
                    <li>{t("text73")}</li>
                    <li>{t("text74")}</li>
                    <li>{t("text75")}</li>
                    <li>{t("text76")}</li>
                    <li>{t("text77")}</li>
                  </ul>
                </div>
              </div>
              <div className="info_section">
                <div className="info_section_title">
                  <span>SERVICE</span>
                </div>
                <div className="thumbnail_v2">
                  <img src={GmContent} alt="" />
                </div>
                <div className="info_v2">
                  <div className="info_title">OFFLINE MARKETING</div>
                  <ul className="info_list">
                    <li>{t("text78")}</li>
                    <li>{t("text79")}</li>
                    <li>{t("text80")}</li>
                    <li>{t("text81")}</li>
                    <li>{t("text82")}</li>
                  </ul>
                </div>
              </div>
              <div className="page_title">OFF-LINE</div>
              <div className="dot_devider"></div>
              <div className="page_sub_title company_name">DotMILL</div>
              <div className="info_section">
                <div className="thumbnail">
                  <img src={Dotmall} alt="" />
                </div>
                <div className="info">
                  <div className="info_title">{t("text39")}</div>
                  <ul className="info_list">
                    <li>{t("text83")}</li>
                    <li>{t("text84")}</li>
                    <li>{t("text85")}</li>
                    <li>{t("text86")}</li>
                  </ul>

                  <div className="info_title">{t("text44")}</div>
                  <ul className="info_list">
                    <li>{t("text87")}</li>
                    <li>{t("text88")}</li>
                    <li>{t("text89")}</li>
                    <li>{t("text90")}</li>
                    <li>{t("text91")}</li>
                    <li>{t("text92")}</li>
                    <li>{t("text93")}</li>
                  </ul>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>{t("text94")}</span>
                </div>
                <div className="info half">
                  <div className="info_title">{t("text95")}</div>
                  <div className="info_content">{t("text96")}</div>
                  <div className="image">
                    <img src={Dettech1} alt="" />
                  </div>
                </div>
                <div className="info half">
                  <div className="info_title">{t("text97")}</div>
                  <div className="info_content">{t("text98")}</div>
                  <div className="image">
                    <img src={Dettech2} alt="" />
                  </div>
                </div>

                <div className="info block info-nopadding">
                  <div className="info_title">{t("text99")}</div>
                  <div className="info_content">
                    {t("text100")}
                    <br className="no_mobile" />
                    {t("text101")}
                  </div>
                  <div className="info_reference">
                    <div className="reference_item">
                      <img src={Dotref1} alt="" />
                      <span>{t("text102")}</span>
                    </div>
                    <div className="reference_item">
                      <img src={Dotref2} alt="" />
                      <span>{t("text103")}</span>
                    </div>
                    <div className="reference_item">
                      <img src={Dotref3} alt="" />
                      <span>{t("text104")}</span>
                    </div>
                    <div className="reference_item">
                      <img src={Dotref4} alt="" />
                      <span>{t("text105")}</span>
                    </div>
                  </div>
                </div>

                <div className="info block info-nopadding">
                  <div className="info_title">{t("text106")}</div>
                  <div className="info_content">{t("text107")}</div>
                  <div className="image per80">
                    <img src={DotTask} alt="" />
                  </div>
                </div>

                <div className="info block center info-nopadding">
                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>{t("text108")}</span>
                    </div>
                    <div className="thumbnail3">
                      <img src={Project} alt="" />
                    </div>
                    <div className="info info3">
                      {/* <div className="info_title">주부상식 APP</div> */}
                      <ul className="year_list">
                        <li>
                          <span>2021</span>
                          {t("text109")}
                        </li>
                        <li>
                          <span>2021</span>
                          {t("text110")}
                        </li>
                        <li>
                          <span>2022</span>
                          {t("text111")}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project_list">
                    <img src={ProjectList1} alt="" />
                    <img src={ProjectList2} alt="" />
                    <img src={ProjectList3} alt="" />
                    <img src={ProjectList4} alt="" />
                  </div>

                  <div className="dot_devider"></div>
                  <div className="page_sub_title company_name">JD SOLUTION</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={JdSolution} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">{t("text39")}</div>
                      <ul className="info_list">
                        <li>{t("text112")}</li>
                        <li>{t("text113")}</li>
                      </ul>

                      <div className="info_title">{t("text44")}</div>
                      <ul className="info_list">
                        <li>{t("text114")}</li>
                        <li>{t("text115")}</li>
                        <li>{t("text116")}</li>
                        <li>{t("text117")}</li>
                        <li>{t("text118")}</li>
                        <li>{t("text119")}</li>
                        <li>{t("text120")}</li>
                        <li>{t("text121")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>{t("text121")}</span>
                    </div>
                    <div className="rnd_list">
                      <div className="rnd_item">
                        <img src={Rnd1} alt="" />
                      </div>
                      <div className="rnd_item">
                        <img src={Rnd2} alt="" />
                      </div>
                      <div className="rnd_item">
                        <img src={Rnd3} alt="" />
                      </div>
                      <div className="rnd_item">
                        <img src={Rnd4} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>{t("text123")}</span>
                    </div>
                    <div className="item_section">
                      <div className="info_section_title">
                        <span>SOUNDTAG</span>
                      </div>
                      <ul className="info_list half">
                        <li>{t("text124")}</li>
                        <li>{t("text125")}</li>
                        <li>{t("text126")}</li>
                        <li>{t("text127")}</li>
                        <li>{t("text128")}</li>
                      </ul>
                      <div className="info_content half">
                        <div className="info_title grey">{t("text129")}</div>
                        <div dangerouslySetInnerHTML={{ __html: t("text130") }}></div>
                        <div className="info_title green">{t("text131")}</div>
                      </div>
                    </div>
                    <div className="item_section">
                      <div className="info_section_title">
                        <span>{t("text132")}</span>
                      </div>
                      <ul className="info_list half">
                        <li>{t("text133")}</li>
                        <li>{t("text134")}</li>
                        <li>{t("text135")}</li>
                      </ul>
                      <br />
                      <div className="info_title green">{t("text136")}</div>
                      <br />
                      <div className="block">{t("text137")}</div>
                      <div className="block">{t("text138")}</div>
                      <div className="block">{t("text139")}</div>
                      <div className="block">{t("text140")}</div>
                    </div>
                  </div>

                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>{t("text141")}</span>
                    </div>
                    <div className="image">
                      <img src={Jepum1} alt="" />
                    </div>
                  </div>

                  <div className="dot_devider"></div>
                  <div className="page_sub_title company_name">VISION AIR</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={Vision} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">{t("text39")}</div>
                      <ul className="info_list">
                        <li>{t("text142")}</li>
                        <li>{t("text143")}</li>
                        <li>{t("text144")}</li>
                        <li>{t("text145")}</li>
                      </ul>

                      <div className="info_title">{t("text44")}</div>
                      <ul className="info_list">
                        <li>{t("text146")}</li>
                        <li>{t("text147")}</li>
                        <li>{t("text148")}</li>
                        <li>{t("text149")}</li>
                        <li>{t("text150")}</li>
                        <li>{t("text151")}</li>
                        <li>{t("text152")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section_title center">
                    <span>{t("text153")}</span>
                  </div>
                  <div className="image">
                    <img src={Led1} alt="" />
                  </div>
                  <div className="info_section_title center">
                    <span>{t("text153")}</span>
                  </div>
                  <div className="image">
                    <img src={Led2} alt="" />
                  </div>

                  <div className="dot_devider"></div>
                  <div className="page_sub_title company_name">BRIGHT STONE</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={Bright} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">{t("text39")}</div>
                      <ul className="info_list">
                        <li>{t("text154")}</li>
                        <li>{t("text155")}</li>
                        <li>{t("text156")}</li>
                        <li>{t("text157")}</li>
                      </ul>

                      <div className="info_title">{t("text39")}</div>
                      <ul className="info_list">
                        <li>{t("text158")}</li>
                        <li>{t("text159")}</li>
                        <li>{t("text160")}</li>
                        <li>{t("text161")}</li>
                        <li>{t("text162")}</li>
                        <li>{t("text163")}</li>
                        <li>{t("text164")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section_title center">
                    <span>{t("text141")}</span>
                  </div>
                  <div className="page_sub_title">{t("text165")}</div>
                  <div className="display_list">
                    <img src={Display1} alt="Display1" />
                    <img src={Display2} alt="Display2" />
                  </div>
                  <div className="image">
                    <img src={Etc1} alt="" />
                  </div>
                  <div className="image">
                    <img src={Etc2} alt="" />
                  </div>

                  <div className="page_title">IP & BRAND</div>
                  <div className="dot_devider"></div>
                  <div className="page_sub_title company_name">SMG ASIA</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={Smg} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">{t("text39")}</div>
                      <ul className="info_list">
                        <li>{t("text166")}</li>
                        <li>{t("text167")}</li>
                        <li>{t("text168")}</li>
                        <li>{t("text169")}</li>
                        <li>{t("text170")}</li>
                      </ul>

                      <div className="info_title">{t("text44")}</div>
                      <ul className="info_list">
                        <li>{t("text171")}</li>
                        <li>{t("text172")}</li>
                        <li>{t("text173")}</li>
                        <li>{t("text174")}</li>
                        <li>{t("text175")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section_title center">
                    <span>{t("text176")}</span>
                  </div>
                  <div className="image">
                    <img src={Smgproj1} alt="" />
                  </div>
                  <div className="info_section_title center">
                    <span>AMORE PACIFIC CHINA</span>
                  </div>
                  <div className="image">
                    <img src={Smgproj2} alt="" />
                  </div>
                  <div className="info_section_title center">
                    <span>TEDDY ISLAND</span>
                  </div>
                  <div className="image">
                    <img src={Smgproj3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}

export default Presentation;
