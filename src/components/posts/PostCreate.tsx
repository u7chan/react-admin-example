import { FC } from 'react'
import { Create, SimpleForm, TextInput, required } from 'react-admin'

export const PostCreate: FC = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="userId" fullWidth validate={[required()]} />
        <TextInput source="title" fullWidth validate={[required()]} />
        <TextInput
          source="body"
          multiline={true}
          fullWidth
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  )
}
