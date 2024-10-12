import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Fragment, useEffect, useState} from 'react';

/**
 * To use react-router-dom with the Next.js development server,
 * we need to prevent the app component from being pre-rendered.
 * This is because react-router-dom relies on the DOM,
 * which isn't available during pre-rendering in Next.js.
 * To avoid hydration errors (where the content rendered on
 * the server differs from what's rendered in the browser),
 * we should ensure consistent rendering by returning null during pre-rendering.
 */

const App = ({Component, pageProps}: AppProps) => {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return <Fragment>{render ? <Component {...pageProps} /> : null}</Fragment>;
};

export default App;
