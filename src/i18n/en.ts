import { TranslationMessages } from 'react-admin'
import defaultEnglish from 'ra-language-english'

export const en: TranslationMessages = {
  ...defaultEnglish,
  resources: {
    posts: {
      name: 'Posts',
      fields: {
        id: 'ID',
        userId: 'UserID',
        title: 'Title',
        body: 'Contents'
      }
    }
  }
}
