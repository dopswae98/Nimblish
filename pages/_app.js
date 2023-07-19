import "../styles/globals.css";
import "../styles/nimbish.css";
import "bootstrap/dist/css/bootstrap.css";


// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";

// import "bootstrap/dist/js/bootstrap.js";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
// library.add(fab);
// library.add(fas);
// library.add(far);
