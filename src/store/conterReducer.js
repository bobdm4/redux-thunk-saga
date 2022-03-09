const defaultState = {
  counter: 0,
}

export const INCREMENT = 'INCREMENT'
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT'

export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 }
    }
    case DECREMENT: {
      return { ...state, counter: state.counter - 1 }
    }

    default:
      return state
  }
}

export const incrementCounterAction = () => ({ type: INCREMENT })
export const asyncIcrementCounterAction = () => ({ type: ASYNC_INCREMENT })
export const decrementCounterAction = () => ({ type: DECREMENT })
export const asyncDecrementCounterAction = () => ({ type: ASYNC_DECREMENT })