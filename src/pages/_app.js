import "@/styles/globals.css";
import "@/styles/fonts.css";
import { store } from "../redux/store.js";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
