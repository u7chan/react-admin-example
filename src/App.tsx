import { Admin, Resource, ListGuesser } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { translations } from './i18n'
import { customTheme } from './themes'
import { defaultDataProvider } from './data'
import { PostList, PostCreate, PostEdit } from './components'

const defaultLang = 'ja'
const i18nProvider = polyglotI18nProvider(
  () => translations[defaultLang],
  defaultLang
)

const App = () => (
  <Admin
    theme={customTheme}
    dataProvider={defaultDataProvider}
    i18nProvider={i18nProvider}>
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
)

export default App
