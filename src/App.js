import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addCashAction, getCashAction } from './store/cashReducer'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncAction/customers'
import { asyncDecrementCounterAction, asyncIcrementCounterAction } from './store/conterReducer'
import { fetchUserAction } from './store/usersReduser'

export const App = () => {
  const cash = useSelector(state => state.cash.cash)
  const [customerCounter, setCustomerCounter] = useState(0)
  const customers = useSelector(state => state.customers.customers)
  const counter = useSelector(state => state.counter.counter)
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()

  const addCash = cash => {
    dispatch(addCashAction(cash))
  }
  const getCash = cash => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = name => {
    setCustomerCounter(customerCounter + 1)
    const customer = {
      name: name,
      id: customerCounter,
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = customer => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={'app'}>
      <div className={'addCash'}>{cash}</div>
      <div className={'btnWrp'}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнит счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
      <div className={'btnWrp'}>
        <button onClick={() => addCustomer(prompt())}>Добавить пользоветеля</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить пользоветелей из базы</button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer, idx) => (
            <div key={`${idx}customer`} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '2rem' }}>Пользователей нет</div>
      )}

      <div>
        <h1>react-saga</h1>
        <div style={{ fontSize: '3rem' }}>{counter}</div>
        <div className={'btnWrp'}>
          <button onClick={() => dispatch(asyncIcrementCounterAction())}>Добавить счетчик</button>
          <button onClick={() => dispatch(asyncDecrementCounterAction())}>Отнять счетчик</button>
          <button onClick={() => dispatch(fetchUserAction())}>Снять со счета</button>
        </div>
        {users.length > 0 ? (
          <div>
            {users.map((user, idx) => (
              <div key={`${idx}user`} onClick={() => removeCustomer(user)}>
                {user.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: '2rem' }}>Пользователей нет</div>
        )}
      </div>
    </div>
  )
}
