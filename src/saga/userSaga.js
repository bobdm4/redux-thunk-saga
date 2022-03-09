import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_USERS, setUserAction } from '../store/usersReduser'

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi)
  console.log('data', data)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(setUserAction(json))
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker)
}
