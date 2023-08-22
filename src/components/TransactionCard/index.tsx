import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles'

interface Category {
  name: string
  icon: string
}

export interface TransactionCardDataProps {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: Category
  date: string
}

interface TransactionCardProps {
  data: TransactionCardDataProps
}

export function TransactionCard({ data }: TransactionCardProps) {
  const { type, title, amount, category, date } = data

  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={data.type}>
        {type === 'negative' && '- '}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />

          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}
