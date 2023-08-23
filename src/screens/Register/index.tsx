import { ViewProps } from 'react-native'
import { Container, Header, Title, Form } from './styles'

import { Input } from '../../components/Form/Input'

type RegisterProps = ViewProps

export function Register({ ...rest }: RegisterProps) {
  return (
    <Container {...rest}>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Form>
    </Container>
  )
}
