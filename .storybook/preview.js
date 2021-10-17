import '../src/style/css/dateRange/styles.css'; // main css file
import '../src/style/css/dateRange/theme/default.css'; // theme css file
import '../src/style/css/custom.css'; 
import '../src/style/fonts/fonts.css';
import '../src/style/scss/_sc-main.scss';
import 'react-phone-number-input/style.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}