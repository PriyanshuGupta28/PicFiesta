import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "Picfiesta",
  description = "Picfiesta We Provide Millions of high quality Stocks, Background, Illustrations and Much More.",
  keywords = "default, keywords",
  author = "Priyanshu Gupta",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;
