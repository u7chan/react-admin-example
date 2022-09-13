import { TranslationMessages } from 'react-admin'
import defaultJapanese from '@bicstone/ra-language-japanese'

export const ja: TranslationMessages = {
  ...defaultJapanese,
  resources: {
    posts: {
      name: '投稿',
      fields: {
        id: 'ID',
        userId: 'ユーザーID',
        title: '見出し',
        body: '本文'
      }
    }
  }
}
