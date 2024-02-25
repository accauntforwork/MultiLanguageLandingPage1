import styled from "styled-components";
import heroPrimary from "../../assets/heroPrimary.png";
import { useTranslation, Trans } from "react-i18next";
import "../../../i18n.js";

const StyledHero = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledHeroContent = styled.div`
  width: 801px;
`;
const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 70px;
  color: rgba(0, 0, 0, 1);
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 45px;
  color: rgba(107, 104, 104, 1);
  margin-bottom: 40px;
`;
const StyledHeroImg = styled.img`
  width: 497px;
  height: 588px;
`;
StyledHeroImg.defaultProps = {
  src: heroPrimary,
};
const StyledButtons = styled.div`
  display: flex;
  gap: 50px;
`;
const StyledButton1 = styled.button`
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
  width: 225px;
  height: 84px;
  border: 2px solid rgba(0, 0, 0, 1);
  padding: 10px;

  &:hover {
    color: rgba(255, 148, 66, 1);
    border: 2px solid rgb(224, 60, 60);
  }
`;

const StyledButton2 = styled.button`
  height: 84px;
  border: 2px solid rgba(0, 0, 0, 1);
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  width: 378px;
  color: rgba(255, 255, 255, 1);
  background: rgba(0, 0, 0, 1);

  &:hover {
    color: rgba(255, 148, 66, 1);
    border: 2px solid rgb(224, 60, 60);
  }
`;
function Hero() {
  const { t } = useTranslation();
  return (
    <StyledHero>
      <StyledHeroContent>
        <StyledH1>{t("AboutMe")}</StyledH1>
        <StyledP>{t("Paragraph")}</StyledP>
        <StyledButtons>
          <StyledButton1>{t("Btn1")}</StyledButton1>
          <StyledButton2>{t("Btn2")}</StyledButton2>
        </StyledButtons>
      </StyledHeroContent>
      <StyledHeroImg></StyledHeroImg>
    </StyledHero>
  );
}

export default Hero;
