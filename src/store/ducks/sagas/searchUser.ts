import { type PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { type searchTypes } from '../../../@types/userInList'
import { searchUser, type userSearchRequestType } from '../../../shared/services/searchUser'
import { failure, success } from '../../reducers/searchUser'

export function * searchUserSaga (action: PayloadAction<userSearchRequestType>) {
  try {
    const response: searchTypes = yield call(searchUser, action.payload)
    
    if (response.total_count === 0 ) {
      yield put(failure('Usuario não encontrado'))
    } else if(response.total_count > 0) {
      yield put(success(response))
    }else{
      yield put(failure('Algo deu errado, tente novamente!'))
    }
    
  } catch (error) {
    yield put(failure('Algo deu errado, tente novamente!'))
  }
}
