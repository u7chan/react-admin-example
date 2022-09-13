import { FC } from 'react'
import { List, Datagrid, TextField } from 'react-admin'

export const PostList: FC = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="userId" />
        <TextField source="title" />
      </Datagrid>
    </List>
  )
}
