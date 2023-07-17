/* eslint-disable */
/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Detail01 from "pages/Detail/One";
import Detail02 from "pages/Detail/Phone";
import Detail03 from "pages/Detail/Marketing";
import Detail04 from "pages/Detail/Platform";
import Ci from "pages/ci";

// Material Kit 2 React routes
import routes from "routes";
import GvTeam from "pages/team";
import MarketingService from "pages/marketing_service";
import MarketingManual from "pages/marketing_manual";
import ContactPage from "pages/contact";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

import enTranslation from "./locales/en.json";
import jaTranslation from "./locales/ja.json";
import koTranslation from "./locales/ko.json";

// 다국어 리소스를 i18n에 추가
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ja: { translation: jaTranslation },
    ko: { translation: koTranslation },
  },
  lng: "ko", // 기본 언어 설정
  fallbackLng: "ko", // 언어가 지원되지 않을 때 사용할 대체 언어 설정
  interpolation: { escapeValue: false }, // React 컴포넌트 안에서 HTML을 사용하기 위해 escapeValue를 false로 설정
});

function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ci" element={<Ci />} />
        <Route path="/team" element={<GvTeam />} />
        <Route path="/marketing_service" element={<MarketingService />} />
        <Route path="/marketing_manual" element={<MarketingManual />} />
        <Route path="/detail/it" element={<Detail01 />} />
        <Route path="/detail/marketing" element={<Detail03 />} />
        <Route path="/detail/phone" element={<Detail02 />} />
        <Route path="/detail/platform" element={<Detail04 />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
