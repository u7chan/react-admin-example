import { RaRecord } from 'react-admin'
import { posts } from './posts'
import { comments } from './comments'

const fakeResources: { [key: string]: RaRecord[] } = {
  posts,
  comments
}

export { fakeResources }
