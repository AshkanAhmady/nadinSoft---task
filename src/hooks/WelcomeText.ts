import { useTranslation } from "react-i18next";

const useWelcomeText = () => {
  const { t } = useTranslation();
  const hours = new Date().getHours();
  let welcomeText = "";
  if (4 <= hours && hours <= 12) {
    welcomeText = t("GoodMorning");
  } else if (12 < hours && hours <= 16) {
    welcomeText = t("GoodAfternoon");
  } else if (16 < hours && hours <= 20) {
    welcomeText = t("GoodEvening");
  } else {
    welcomeText = t("GoodNight");
  }

  return welcomeText;
};

export default useWelcomeText;
