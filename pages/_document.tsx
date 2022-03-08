import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'
import CustomHeader from "../components/CustomHeader";

export default function Document() {
    
    return (
        <Html lang="en">
            <CustomHeader/>
            <Head>
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}