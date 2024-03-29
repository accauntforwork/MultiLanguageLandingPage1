import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledSelector = styled.select`
  margin-top: -15px;
  padding: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  font-weight: 700;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <StyledSelector onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="uz">O'zbekcha</option>
      </StyledSelector>
    </div>
  );
};

export default LanguageSelector;
