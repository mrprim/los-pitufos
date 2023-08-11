import './App.css';
import { FormattedMessage, defineMessages } from 'react-intl'
import { IntlProvider } from 'react-intl';
import translations from './i18n/locales';

const messages = defineMessages({
  welcome: {
    id: 'app.welcome',
    defaultMessage: 'THE SMURFS'
  },
  language: {
    id: 'app.language',
    defaultMessage: 'English'
  }
});
const LOCALE = 'es';

const App = () => 
<IntlProvider
  locale={LOCALE}
  defaultLocale={LOCALE}
  messages={translations[LOCALE]}>
    <div className="App">
      <header className="App-header">
        <p>
          <FormattedMessage {...messages.welcome} />
        </p>
        <p>
          <FormattedMessage {...messages.language} />
        </p>
      </header>

    </div>
</IntlProvider>

export default App;
