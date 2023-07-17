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
          <CommonSubHeader title="MARKETING" />
          <div className="inner">
            <div className="info1 marketing_info1">
              <div className="page_title">PROCESS</div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon1} alt="Micon1" />
                </div>
                <span className="progress">Step1</span>
                <div className="title">사전분석</div>
                <div className="desc">
                  GLINT VISION의 자체
                  <br />
                  분석들을 활용하여
                  <br />
                  광고주의 <span className="accent">Needs 파악,</span>
                  <br />
                  <span className="accent">방향성 제시</span>
                </div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon2} alt="Micon2" />
                </div>
                <span className="progress">Step2</span>
                <div className="title">전담팀 구축</div>
                <div className="desc">
                  사전 분석자료와 광고주가
                  <br />
                  원하는 운영 방향을
                  <br />
                  확인하여 <span className="accent">최적의 전담팀을</span>
                  <br />
                  <span className="accent">구성</span> Needs를 충족시킬 수<br />
                  있는 광고 운영 제안
                </div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon3} alt="Micon3" />
                </div>
                <span className="progress">Step3</span>
                <div className="title">운영실행</div>
                <div className="desc">
                  광고주 별 최적의 조건
                  <br />에 맞는 매체, 채널 등<br />
                  광고주와 소비자의
                  <br />
                  이슈를 끄어낼
                  <br />
                  <span className="accent">최적의 운영 실행.</span>
                </div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon4} alt="Micon4" />
                </div>
                <span className="progress">Step4</span>
                <div className="title">운영 모니터링</div>
                <div className="desc">
                  운영 실행 중 효과 분석
                  <br />에 따른 <span className="accent">최적의 광고</span>
                  <br />
                  <span className="accent">모니터링을</span> 통한{" "}
                  <span className="accent">브랜드</span>
                  <br />
                  <span className="accent">관리 및 개선사항</span>
                  <br />
                  <span className="accent">지속적 기획 및 실행.</span>
                </div>
              </div>
              <div className="step_item">
                <div className="step">
                  <img src={Micon5} alt="Micon5" />
                </div>
                <span className="progress">Step5</span>
                <div className="title">사후관리</div>
                <div className="desc">
                  GLINT VISION의 운<br />영 결과를 전용 툴을
                  <br />
                  통해 <span className="accent">최종 보고 및 이후</span>
                  <br />
                  <span className="accent">운영에 따른 추가 제안.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="info2 marketing_info2">
            <div className="inner">
              <div className="page_title">ON-LINE</div>
              <div className="dot_devider"></div>
              <div className="page_sub_title">JJ GLOBAL GROUP</div>
              <div className="info_section">
                <div className="thumbnail mtplus">
                  <img src={JjGroup} alt="" />
                </div>
                <div className="info">
                  <div className="info_title">사업내용</div>
                  <ul className="info_list">
                    <li>국내 3050 주부 대표 커머스 플랫폼 [주부상식] 개설</li>
                    <li>SNS커머스 업계 유일 방송 프로그램 제작 인프라 보유</li>
                    <li>지상파, 종편, 케이블, OTT를 넘나드는 다양한 제작 범위 확대</li>
                    <li>자체 구축 시스템을 통한 콘텐츠 커머스 비즈니스 운영 기업</li>
                  </ul>

                  <div className="info_title">주요실적</div>
                  <ul className="info_list">
                    <li>[주부상식] 앱 누적 다운로드 수 100만 돌파 및 매출 200억 원 달성</li>
                    <li>3050세대를 위한 유튜브 방송국 개설, 콘텐츠 구독자 60만 명</li>
                    <li>파트너사 500사, 5,000여개 품목 확보</li>
                    <li>자체 프로그램 제작을 통한 제품 판매 1,2,3차 완판 달성</li>
                    <li>중기부 – 아마존 육성 스타트업 E커머스 분야 선정</li>
                    <li>누적 다운로드 100만 돌파 (2020)</li>
                    <li>유저 약 350만 명 보유, 핵심 역량 1,260만 명 마케팅 고객 확보</li>
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
                  <div className="info_title">주부상식 APP</div>
                  <ul className="info_list">
                    <li>3050 주부 대표 커머스 플랫폼</li>
                    <li>파트너사 500사, 5000여 개 품목 확보</li>
                    <li>중기부 – 아마존 육성 스타트업 E커머스 분야 선정</li>
                    <li>누적 다운로드 100만 돌파 (2020)</li>
                    <li>매출 200억 및 유저 약 350만 명 달성(2021)</li>
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
                    <div className="info_title">YOUTUBE 채널</div>
                    <div className="info_content">
                      3050세대를 위한 유튜브 방송국 개설
                      <br />
                      전체 콘텐츠 구독자 60만 명<br />
                      자체 프로그램을 통한 라이브 커머스
                    </div>
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
                    <div className="info_title">1,2,3차 판매 완판 달성</div>
                  </div>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>MARKETING</span>
                </div>
                <div className="info block center">
                  <div className="info_title center">온라인 마케팅 콘텐츠 제작 및 대행</div>
                  <div className="image">
                    <img src={JjMarketing} alt="" />
                  </div>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>외부제작 콘텐츠</span>
                </div>
                <div className="info block">
                  <div className="info_title center">
                    지상파, 종편, 케이블, OTT를 넘나드는 다양한 제작 범위
                  </div>
                  <div className="info_content center">
                    다양한 영상 매체, 광고를 통해 커머스 플랫폼으로 고객 유입
                    <br />
                    온라인 커머스 업계에서 유일하게 지상파/케이블 방송 프로그램 제작 인프라 보유중
                  </div>
                  <div className="image">
                    <img src={Jjcontents} alt="" />
                  </div>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>PARTNERS</span>
                </div>
                <div className="info block">
                  <div className="info_title center">
                    국내 3050세대 제품을 유통하는 대표 파트너사
                  </div>
                  <div className="info_content center">
                    다양한 영상 매체, 광고를 통해 커머스 플랫폼으로 고객 유입
                    <br />
                    온라인 커머스 업계에서 유일하게 지상파/케이블 방송 프로그램 제작 인프라 보유중
                  </div>
                  <div className="image">
                    <img src={Partners} alt="" />
                  </div>
                </div>
              </div>
              <div className="dot_devider"></div>
              <div className="page_sub_title">GLEAM MEDIA</div>
              <div className="info_section">
                <div className="thumbnail">
                  <img src={GmMedia} alt="" />
                </div>
                <div className="info">
                  <div className="info_title">사업내용</div>
                  <ul className="info_list">
                    <li>K-POP 투표 플랫폼 ‘STAR PLAY’ 개발</li>
                    <li>대형 트래픽에 최적화된 글로벌 K-POP 팬덤 투표 플랫폼 운영</li>
                    <li>글로벌 145개국 대상 서비스 및 500만 유저 보유</li>
                    <li>뉴욕 타임스퀘어/Coex 등 150여개 다양한 채널로 송출</li>
                  </ul>

                  <div className="info_title">주요실적</div>
                  <ul className="info_list">
                    <li>2018-2020 SBS Show 사전, 생방송 투표 서비스</li>
                    <li>2018 KBS 연예대상 투표 서비스, 일일 110만 투표 집계</li>
                    <li>2019 MBC 어썸라이브 제작, 투표 서비스, 실시간 팬미팅 스트리밍</li>
                    <li>2019 KBS 입맞춤 방송 전 사전 투표, 실시간 방송 결과 발표 및 송출</li>
                    <li>2020 MBC 비대면 콘서트 월드이즈원 총괄 제작, 투표 서비스</li>
                    <li>실시간 동시접속 140만 트래픽,</li>
                    <li>2020 소리바다 어워즈 글로벌 아티스트 투표 서비스. 4주 간 10억 투표 진행</li>
                    <li>2021 자체 기획투표 이벤트. 단일 투표 당 3억 표 달성</li>
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
                    <li>대형 파사드 광고 집행</li>
                    <li>SNS 공유 이벤트 진행</li>
                    <li>특전 영상 상영 이벤트</li>
                    <li>팬들을 위한 역조공 콘텐츠</li>
                    <li>전국 동시 송출 이벤트</li>
                  </ul>
                </div>
              </div>
              <div className="page_title">OFF-LINE</div>
              <div className="dot_devider"></div>
              <div className="page_sub_title">DotMILL</div>
              <div className="info_section">
                <div className="thumbnail">
                  <img src={Dotmall} alt="" />
                </div>
                <div className="info">
                  <div className="info_title">사업내용</div>
                  <ul className="info_list">
                    <li>콘텐츠 홀로그램 기반 혼합현실 콘텐츠 주력</li>
                    <li>VR과 AR을 접목한 혼합 현실(MR)기술 기반의 미래지향적 공연 콘텐츠 제작</li>
                    <li>문체부 및 콘진원 R&D 지원사업 플랫폼 개발</li>
                    <li>미디어 서버 및 UX/UI 시뮬레이터 자체 개발</li>
                  </ul>

                  <div className="info_title">주요실적</div>
                  <ul className="info_list">
                    <li>
                      평창 동계올림픽 개, 폐막식 프로젝션 맵핑/ M-net Asia Music Awards 홀로그램
                    </li>
                    <li>
                      삼성전자, 시공테크, 대홍기획 협력사 등록 / 시용보증기금 ‘퍼스트 펭귄‘ 기업선정
                    </li>
                    <li>국내최초 혼합현실(MR) 미디어아트 존 오픈</li>
                    <li>판문점 하나의 봄 미디어 파사드 / 파라다이스시티 호텔 미디어 파사드</li>
                    <li>
                      한화 아쿠아플라넷 인터렉티브 콘텐츠 / MAMA Japan, Hong Kong 미디어 콘텐츠
                    </li>
                    <li>인사이드서울 이머시브 프로젝션 맵핑 룸 / DDP 서울 라이트 프로젝션 맵핑</li>
                    <li>제 11회 한중일 문화장관회의 홀로그램 미디어 퍼포먼스</li>
                  </ul>
                </div>
              </div>

              <div className="info_section">
                <div className="info_section_title">
                  <span>독보적 기술력</span>
                </div>
                <div className="info half">
                  <div className="info_title">미디어 서버 및 UX/UI 시뮬레이터 자체 개발</div>
                  <div className="info_content">이머시브 콘텐츠 사전시각화/시뮬레이터</div>
                  <div className="image">
                    <img src={Dettech1} alt="" />
                  </div>
                </div>
                <div className="info half">
                  <div className="info_title">자체 제작 미디어 서버 출시</div>
                  <div className="info_content">
                    대규모 디지털 미디어 시스템 원격 통합제어 컨트롤 서버
                  </div>
                  <div className="image">
                    <img src={Dettech2} alt="" />
                  </div>
                </div>

                <div className="info block">
                  <div className="info_title">
                    실감 미디어, 미디어 플랫폼 업계에서 한국 최다 레퍼런스 확보
                  </div>
                  <div className="info_content">
                    전체 매출액의 50%는 정부 및 지자체 수주 실적 프로젝터, LED 패널 등
                    <br className="no_mobile" />
                    하드웨어 기업과의 사업 부분 연계 시 폭발적 성장 가능
                  </div>
                  <div className="info_reference">
                    <div className="reference_item">
                      <img src={Dotref1} alt="" />
                      <span>평창올림픽</span>
                    </div>
                    <div className="reference_item">
                      <img src={Dotref2} alt="" />
                      <span>김포 아라뱃길</span>
                    </div>
                    <div className="reference_item">
                      <img src={Dotref3} alt="" />
                      <span>홍콩 MAMA</span>
                    </div>
                    <div className="reference_item">
                      <img src={Dotref4} alt="" />
                      <span>삼성 갤럭시</span>
                    </div>
                  </div>
                </div>

                <div className="info block">
                  <div className="info_title">
                    최고의 미디어 아트 콘텐츠 플랫폼 전공정 개발 시스템 구축
                  </div>
                  <div className="info_content">
                    기획, 제작, 설계, 홍보, 시공, MD, 상품 개발까지 자체 제작 가능한 전문가 집단
                  </div>
                  <div className="image per80">
                    <img src={DotTask} alt="" />
                  </div>
                </div>

                <div className="info block center">
                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>진행중인 프로젝트 및 실적</span>
                    </div>
                    <div className="thumbnail3">
                      <img src={Project} alt="" />
                    </div>
                    <div className="info info3">
                      {/* <div className="info_title">주부상식 APP</div> */}
                      <ul className="year_list">
                        <li>
                          <span>2021</span>2021년 11월 중 서울 광화문에 코엑스 4배 규모의 대형
                          광고판 오픈 예정
                        </li>
                        <li>
                          <span>2021</span>광주미디어아트 창의벨트 18억원 수주 공사 진행중
                        </li>
                        <li>
                          <span>2022</span>2022년 광주시 금남로 공원 및 5000억 규모 랜드마크 대형
                          광고판 오픈 예정
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
                  <div className="page_sub_title">JD SOLUTION</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={JdSolution} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">사업내용</div>
                      <ul className="info_list">
                        <li>고출력(터널/플랜트/모빌리티 외), 초지향(스마트 시큐리티/신호등 외)</li>
                        <li>
                          명료성/지향성 음파 기술이 적용된 초지향성 고출력 스피커를 제조 제품 및
                        </li>
                        <li>
                          시스템 기반으로 한 언택트, 안전, 편리, 유용 서비스를 제공 필요한 곳에만
                        </li>
                        <li>선택적으로 소리를 전달할 수 있는 독립 음장 기술보유</li>
                      </ul>

                      <div className="info_title">주요실적</div>
                      <ul className="info_list">
                        <li>
                          KDB캐피탈, 캐피탈원, 글린트파트너스, 미시간 등 약 300억원 투자 유치.
                        </li>
                        <li>300만불 수출의 탑 수상(인도네시아, 말레이지아, 싱가폴 등)</li>
                        <li>현대자동차, 삼성전자 등 초지향성 스피커 시스템 개발 완료</li>
                        <li>
                          경찰청, 해경, 해군, 도로공사, 공항공사, 코레일, 한화, 삼성, 포스코 등 납품
                        </li>
                        <li>서초, 강동, 송파, 강북, 노원 중랑, 구로구 및 군포, 양주시 등 납품</li>
                        <li>사운드태그 기반 Cardless 버스요금 통합 자동 결제시스템 개발</li>
                        <li>(국토교통과학기술진흥원)</li>
                        <li>
                          기술특허 44건 등 총 81건 지적재산권 보유(세계 1위 초지향성 음향 기술)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>R&D 및 상용화 실적</span>
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
                      <span>주요기술</span>
                    </div>
                    <div className="item_section">
                      <div className="info_section_title">
                        <span>SOUNDTAG</span>
                      </div>
                      <ul className="info_list half">
                        <li>비가청음파(기계만 감지하는 음역대)에 정보를 심어 송수신하는 기술</li>
                        <li>모바일 기기를 결제 단말에 가져가는 것 만으로 결제 및 인증 가능</li>
                        <li>
                          가맹주는 고가의 POS기기 구매 없이 기존 단말에 기능 추가만으로 사용 가능
                        </li>
                        <li>고객은 앱 설치만으로 결제 및 인증 가능(배터리 소모 없음)</li>
                        <li>운영체제(애플, 구글 등)를 가리지 않는 높은 범용성</li>
                      </ul>
                      <div className="info_content half">
                        <div className="info_title grey">2019.04 ~ 2021.12 (진행중)</div>
                        <div>
                          사운드태그 기반 Cardless 버스요금 통합 자동
                          <br />
                          결제시스템 개발 (국토교통과학기술진흥원 과제와 연계)
                        </div>
                        <div className="info_title green">일본 FUJITSU 납품</div>
                      </div>
                    </div>
                    <div className="item_section">
                      <div className="info_section_title">
                        <span>음파 활용 P2P결제 구조</span>
                      </div>
                      <ul className="info_list half">
                        <li>Cardless! 폰-TO-폰 결제 방식으로 카드/가맹점 단말기 불필요</li>
                        <li>Paperless! App内 메시징 기능을 통한 무전표 거래 가능</li>
                        <li>
                          No NFC! 휴대폰 사양 관계없이 사용 가능üNo NFC! 휴대폰 사양 관계없이 사용
                          가
                        </li>
                      </ul>
                      <br />
                      <div className="info_title green">
                        고객 &#60;------- 고주파 패턴 DB -------&#62; 가맹점
                      </div>
                      <br />
                      <div className="block">① 음파패턴 요청 및 할당</div>
                      <div className="block">② 고객 휴대폰 마이크와 가맹점주의 휴대폰 스피커</div>
                      <div className="block">③ 음파 송출자 조회 및 확인</div>
                      <div className="block">
                        ④ 전용 App을 통한 가맹점주의 결제요청 및 고객의 결제(PIN 번호 입력)
                      </div>
                    </div>
                  </div>

                  <div className="info_section">
                    <div className="info_section_title center">
                      <span>주요제품 및 특장점</span>
                    </div>
                    <div className="image">
                      <img src={Jepum1} alt="" />
                    </div>
                  </div>

                  <div className="dot_devider"></div>
                  <div className="page_sub_title">VISION AIR</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={Vision} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">사업내용</div>
                      <ul className="info_list">
                        <li>한국전광방송협회 전국 회원사 네트워크</li>
                        <li>실내형/실외형 LED 전광판 판매</li>
                        <li>해외 20개국 50대 이상 판매/설치 노하우 보유</li>
                        <li>한국 옥외 LED 광고 매체의 1/3 보유 및 대행</li>
                      </ul>

                      <div className="info_title">주요실적</div>
                      <ul className="info_list">
                        <li>㈜리만코리아 옥외광고 총괄 대행</li>
                        <li>뉴욕 맨하탄 타임스퀘어 나스닥 & 로이터통신타워 LED 전광판 광고</li>
                        <li>서울 LED 전광판 광고 (Coex, K-POP 스퀘어, 신사, 사당, 합정)</li>
                        <li>
                          한국 지방 광역시 LED 전광판 광고 (부산 서면, 대구 범어, 광주 신세계, 대전,
                          천안)
                        </li>
                        <li>스포츠 LED 전광판 광고 (배구장, 야구장, 축구장, 농구장)</li>
                        <li>기타 옥내/외 Digital 미디어(지하철, KTX 역내 LED 매체)</li>
                        <li>전국 24여개 회사 LED전광판 유지보수계약 및 관리 중</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section_title center">
                    <span>LED 전광판 광고</span>
                  </div>
                  <div className="image">
                    <img src={Led1} alt="" />
                  </div>
                  <div className="info_section_title center">
                    <span>LED 전광판 광고</span>
                  </div>
                  <div className="image">
                    <img src={Led2} alt="" />
                  </div>

                  <div className="dot_devider"></div>
                  <div className="page_sub_title">BRIGHT STONE</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={Bright} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">사업내용</div>
                      <ul className="info_list">
                        <li>투명 LED 디스플레이 전광판 개발 / 제조</li>
                        <li>투명 디스플레이 관련 최고의 기술력 보유</li>
                        <li>높은 해상도 경량 구조를 통한 높은 제품 경쟁력</li>
                        <li>낮은 생산원가를 구현하여 가격 경쟁력 확보</li>
                      </ul>

                      <div className="info_title">주요실적</div>
                      <ul className="info_list">
                        <li>성남시 판교역 대형 투명 디스플레이 설치</li>
                        <li>성남시청 체육공원 대형 투명 디스플레이 설치</li>
                        <li>거창 군청 톨게이트 상단 대형 투명디스플레이 설치</li>
                        <li>거창 군청 랜드마크 구형 투명 디스플레이 설치</li>
                        <li>문화콘텐츠협회 투명 디스플레이설치</li>
                        <li>미아동 롯데 백화점 원기둥 형 플렉시블 디스플레이 설치</li>
                        <li>광주시 버스 쉘터 투명디스플레이 설치 등</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section_title center">
                    <span>주요제품 및 특장점</span>
                  </div>
                  <div className="page_sub_title">FLIM TYPE 투명 DISPLAY</div>
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
                  <div className="page_sub_title">SMG ASIA</div>
                  <div className="info_section">
                    <div className="thumbnail">
                      <img src={Smg} alt="" />
                    </div>
                    <div className="info">
                      <div className="info_title">사업내용</div>
                      <ul className="info_list">
                        <li>K-ARTIST 굿즈 개발 및 유통</li>
                        <li>K-ARTIST 콜라보레이션</li>
                        <li>K-BRAND 런칭</li>
                        <li>IP BRAND 개발</li>
                        <li>APP 개발</li>
                      </ul>

                      <div className="info_title">주요실적</div>
                      <ul className="info_list">
                        <li>BTS WORLD GOODS 일본 총판 유통</li>
                        <li>STARThING_ K-POP 굿즈 정품 인증 APP 개발</li>
                        <li>NCT 127 x TEDDY ISLAND 의류 제조 및 유통</li>
                        <li>DAUGHTER&DADDY 의류 브랜드 제조, 유통 및 스타 마케팅</li>
                        <li>다양한 K-POP 콘서트의 해외 판권 배급</li>
                      </ul>
                    </div>
                  </div>

                  <div className="info_section_title center">
                    <span>프로젝트</span>
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
