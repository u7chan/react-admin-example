import { Admin, Resource, ListGuesser } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { translations } from './i18n';
import jsonServerProvider from 'ra-data-json-server';

const defaultLang = 'ja';
const i18nProvider = polyglotI18nProvider(
  () => translations[defaultLang],
  defaultLang
);

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
