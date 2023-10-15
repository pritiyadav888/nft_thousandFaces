// The MyApp component that wraps around all page components
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;
  