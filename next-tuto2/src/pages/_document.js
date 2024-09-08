import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <h1> afeat</h1>
          <Main />
          <h2> end</h2>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
