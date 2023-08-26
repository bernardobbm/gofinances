import { useState } from 'react'
import {
  ViewProps,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles'
import { CategorySelect } from '../CategorySelect'
import { InputForm } from '../../components/Form/InputForm'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'

type RegisterProps = ViewProps

export type FormData = FieldValues & {
  name: string
  amount: number
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Valor é um campo obrigatório'),
})

export function Register({ ...rest }: RegisterProps) {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleRegister({ name, amount }: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const data = {
      name,
      amount,
      transactionType,
      category: category.key,
    }

    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container {...rest}>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              error={errors.name && errors.name?.message}
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <InputForm
              name="amount"
              error={errors.amount && errors.amount?.message}
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
            />

            <TransactionTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                isActive={transactionType === 'up'}
                onPress={() => handleTransactionTypeSelect('up')}
              />

              <TransactionTypeButton
                type="down"
                title="Outcome"
                isActive={transactionType === 'down'}
                onPress={() => handleTransactionTypeSelect('down')}
              />
            </TransactionTypes>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
