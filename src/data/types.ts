import { RaRecord } from 'react-admin'

export type Post = {
  userId: number
  title: string
  body: string
} & RaRecord

export type Comment = {
  postId: number
  name: string
  email: string
  body: string
} & RaRecord
