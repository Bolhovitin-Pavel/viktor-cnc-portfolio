import Document, {Head, Html, Main, NextScript} from 'next/document';
import {Children} from 'react';
import {AppRegistry} from 'react-native';
import app from '../../app.json';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps({renderPage}: any) {
    AppRegistry.registerComponent(app.name, () => Main);

    //@ts-expect-error getApplication is handled by react-native-web
    const {getStyleElement} = AppRegistry.getApplication(app.name);

    const page = await renderPage();

    const styles = [
      <style
        key="dangerouslySetInnerHTML_normalizeNextElements"
        dangerouslySetInnerHTML={{__html: normalizeNextElements}}
      />,
      getStyleElement(),
    ];

    return {...page, styles: Children.toArray(styles)};
  }

  render() {
    return (
      <Html style={{height: '100%'}}>
        <Head />

        <body style={{height: '100%', overflow: 'hidden'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
