import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "rsuite";

function LoadingPage() {
    const { t } = useTranslation();
    const [text, setText] = useState(t('loadingpage_wait-a-moment'));
    setTimeout(() => {
        setText(t('loadingpage_longer-than-usual'));
    }, 3000);

    return (
        <Loader center style={{ color: "blue" }} size="lg" content={ text } vertical/>
    )
}

export default LoadingPage;