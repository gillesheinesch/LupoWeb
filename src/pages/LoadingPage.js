import React, { useState } from "react";
import { Loader } from "rsuite";

function LoadingPage() {
    const [text, setText] = useState("Please wait a moment ...");
    setTimeout(() => {
        setText("Loading takes longer than usual ...")
    }, 3000);

    return (
        <Loader center style={{ color: "blue" }} size="lg" content={ text } vertical/>
    )
}

export default LoadingPage;