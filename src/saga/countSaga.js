import { put, takeEvery } from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCounterAction, incrementCounterAction } from '../store/conterReducer'
const delay = ms => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
  yield delay(500)
  yield put(incrementCounterAction())
}

function* decrementWorker() {
	yield delay(500)
  yield put(decrementCounterAction())
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}
