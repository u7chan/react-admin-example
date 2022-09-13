import { TranslationMessages } from 'react-admin'
import defaultEnglish from 'ra-language-english'

export const en: TranslationMessages = {
  ...defaultEnglish,
  resources: {
    posts: {
      name: 'Posts',
      fields: {
        userId: 'User',
        id: 'ID',
        title: 'Title',
        body: 'Contents'
      }
    }
  }
}
