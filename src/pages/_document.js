import Document, { Html, Head, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";

class Documents extends Document {
  render() {
    return (
      <Html>
        <Head>
          {!isDevelopment && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-ZNDXNCMG6E"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-ZNDXNCMG6E');
            `,
                }}
              />
            </>
          )}
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="description"
            content="Learn RegEx, step by step, zero to advanced. Playground and Cheatsheet."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Documents;
