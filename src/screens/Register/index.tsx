import { ViewProps } from 'react-native'
import { Container, Header, Title, Form, Fields } from './styles'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'

type RegisterProps = ViewProps

export function Register({ ...rest }: RegisterProps) {
  return (
    <Container {...rest}>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  )
}
