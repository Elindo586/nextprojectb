import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Technical Union | Industrial Exporters"
          />
          <meta
            name="keywords"
            content=" Technical Union, exports, hydraulics, electrical, mechanical"
          />

          <link rel="manifest" href="/manifest.json " />
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
