import "../styles/global.css";
import "../styles/highlight-dracula.css";

import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
