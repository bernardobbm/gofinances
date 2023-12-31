import { ViewProps } from 'react-native'

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles'

import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  TransactionCardDataProps,
} from '../../components/TransactionCard'

export interface DataListProps extends TransactionCardDataProps {
  id: string
}

type DashboardProps = ViewProps

export function Dashboard({ ...rest }: DashboardProps) {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      date: '10/04/2020',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do Apartamento',
      amount: 'R$ 1.200,00',
      date: '10/04/2020',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
    },
  ]

  return (
    <Container {...rest}>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/114936465?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Bernamassa</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
