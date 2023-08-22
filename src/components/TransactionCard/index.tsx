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

interface TransactionCardProps {
  data: {
    title: string
    amount: string
    category: Category
    date: string
  }
}

export function TransactionCard({ data }: TransactionCardProps) {
  const { title, amount, category, date } = data

  return (
    <Container>
      <Title>{title}</Title>

      <Amount>{amount}</Amount>

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
