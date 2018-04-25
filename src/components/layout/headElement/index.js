import React from 'react';
import Helmet from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>test</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet" type="text/css" />
    </Helmet>
  );
};

export default Head;
