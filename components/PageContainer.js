
import React from 'react';
import Head from 'next/head';

const Comp = ({ children }) => (
    <div>
        <Head>
            <title>Colors</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable = no" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link rel="icon" type="image/png" href="/static/favicon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/icon.png" />
        </Head>
        {children}
        <style jsx global>{`
            body {
                font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
            }
        `}
        </style>
    </div>
);

Comp.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default Comp;
