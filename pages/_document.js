import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>NetByBit</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Pacifico|Open+Sans|Modak|Raleway:100,200,300,400,500,600,700,800,900"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          />
          {this.props.styleTags}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
