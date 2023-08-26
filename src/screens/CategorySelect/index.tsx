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
  category: CategoryProps
  setCategory: (category: CategoryProps) => void
  closeSelectCategory: () => void
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
  ...rest
}: CategorySelectProps) {
  function handleCategorySelect(category: CategoryProps) {
    setCategory(category)
  }

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
          <Category
            isActive={category.key === item.key}
            onPress={() => handleCategorySelect(item)}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  )
}
