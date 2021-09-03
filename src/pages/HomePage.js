import React from "react";
import { useUser } from "../components/UserProvider";
import TextLoop from "react-text-loop";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { userData, isLoggedIn } = useUser();
  const { t } = useTranslation();

  return (
    <div>
      { isLoggedIn && <h1>Welcome { userData.name}!</h1>}
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <h2>{ t('homepage_text-loop-build-server') }</h2>
        <h2>{ t('homepage_text-loop-install-plugins') }</h2>
        <h2>{ t('homepage_text-loop-plugin-range') }</h2>
      </TextLoop>
    </div>
  )
}

export default HomePage;