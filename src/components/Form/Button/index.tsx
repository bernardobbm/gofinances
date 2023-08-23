import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

type ButtonProps = TouchableOpacityProps & { title: string }

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container>
      <Title {...rest}>{title}</Title>
    </Container>
  )
}
