import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles'

type TransactionTypeButtonProps = TouchableOpacityProps & {
  title: string
  type: 'up' | 'down'
  isActive: boolean
}

const icons = { up: 'arrow-up-circle', down: 'arrow-down-circle' }

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: TransactionTypeButtonProps) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
