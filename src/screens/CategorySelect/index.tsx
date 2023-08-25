import { FlatList, ViewProps } from 'react-native'
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles'
import { categories } from '../../utils/categories'
import { Button } from '../../components/Form/Button'

interface CategoryProps {
  key: string
  name: string
}

interface CategorySelectProps extends ViewProps {
  category: string
  setCategory: (category: CategoryProps) => void
  closeSelectCategory: () => void
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
  ...rest
}: CategorySelectProps) {
  return (
    <Container {...rest}>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  )
}
