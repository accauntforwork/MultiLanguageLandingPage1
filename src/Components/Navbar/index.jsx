import styled from "styled-components";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import About from "../../pages/About/index.jsx";
import Contact from "../../pages/Contact/index.jsx";
import Skills from "../../pages/Skills/index.jsx";
import Projects from "../../pages/Projects/index.jsx";

import { useTranslation, Trans } from "react-i18next";
import LanguageSelector from "../../../languageSelector.jsx";
import "../../../i18n.js";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
`;
const StyledLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 45px;
  margin-bottom: 80px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);

  &:hover {
    color: rgba(255, 148, 66, 1);
  }
`;

function Navbar() {
  const { t } = useTranslation();
  return (
    <StyledNavbar>
      <StyledLinks>
        <LanguageSelector />
        <StyledLink>
          <Link to="/About">{t("AboutMe")}</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/Contact">{t("Contact")}</Link>
        </StyledLink>
        <StyledLink>
          <Link to="Skills">{t("Skills")}</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/Projects">{t("Projects")}</Link>
        </StyledLink>
      </StyledLinks>
    </StyledNavbar>
  );
}
export default Navbar;
