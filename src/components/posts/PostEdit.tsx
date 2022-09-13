import { FC } from 'react'
import { Edit, SimpleForm, TextInput, required } from 'react-admin'

export const PostEdit: FC = () => {
  return (
    <Edit>
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
    </Edit>
  )
}
