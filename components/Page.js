import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Comp = ({ children }) => (
  <div>
    <Head>
      <title>Rainbow</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="icon" type="image/png" href="/static/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icon.png" />
      <link rel="stylesheet" href="/static/normalize.css" />
    </Head>
    {children}
  </div>
);

Comp.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Comp;
