import { TextInputProps } from 'react-native'
import { Input } from '../Input'
import { Container } from './styles'
import { Control, Controller } from 'react-hook-form'
import { FormData } from '../../../screens/Register'

interface InputFormProps extends TextInputProps {
  control: Control<FormData>
  name: string
}

export function InputForm({ control, name, ...rest }: InputFormProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </Container>
  )
}
