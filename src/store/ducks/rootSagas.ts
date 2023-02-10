import { all, takeLatest } from 'redux-saga/effects'
import { request as searchUserRequest } from '../reducers/searchUser'
import { request as getUserProfileRequest } from '../reducers/getUserProfile'
import { searchUserSaga } from './sagas/searchUser'
import { getUserProfileSaga } from './sagas/getUserProfile'

export function * rootSaga () {
  yield all(
    [
      takeLatest(getUserProfileRequest, getUserProfileSaga),
      takeLatest(searchUserRequest, searchUserSaga)
    ])
}
