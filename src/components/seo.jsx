import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Rain Whisper Media`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Rain Whisper Media is a digital marketing agency that focuses on your goals, guides you in marketing strategy, apply all available digital mechanisms and take into account a desires of your customers. " />
      <meta name="og:description" property="og:description" content="Rain Whisper Media is a digital marketing agency that focuses on your goals, guides you in marketing strategy, apply all available digital mechanisms and take into account a desires of your customers. " />
      <meta name="og:title" property="og:title" content="Rain Whisper Media"></meta>
<meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
                <meta property="og:image" content="https://rain-whisper-media.admiral-studios.com/assets/img/favicon.png" />
            
      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;