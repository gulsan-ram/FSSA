import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical,
  image,
}) {
  const siteName = "Future Star Sports Academy";
  const siteUrl = "https://futurestarsportsacademy.org"; // change when live
  const defaultImage = "/Images/fssa-logo.webp";

  return (
    <Helmet>
      {/* ================= BASIC SEO ================= */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* ================= CANONICAL ================= */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ================= OPEN GRAPH ================= */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:alt" content={title} />

      {/* ================= TWITTER ================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
