import Document, { Html, Head, Main, NextScript } from "next/document";

const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href={`${pathPrefix}/favicon.ico`} />
          <title>Alejandro Osorio Díaz - Software developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
