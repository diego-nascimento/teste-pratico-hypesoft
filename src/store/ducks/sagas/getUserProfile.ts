import { type PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { type userProfileTypes } from '../../../@types/userProfile'
import { Result } from '../../../shared/http'
import { getUserProfile, type getUserProfileSearchRequestType } from '../../../shared/services/getUserProfile'

import { failure, success } from '../../reducers/getUserProfile'

export function * getUserProfileSaga (action: PayloadAction<getUserProfileSearchRequestType>) {
  try {
    const response: Result = yield call(getUserProfile, action.payload)
    if(response.statusCode !== 200){
      throw new Error('')
    }
    
    if (response.body === null) {
      yield put(failure('Usuario não encontrado'))
    } else {
      yield put(success(response.body))
    }
  } catch (error) {
    yield put(failure('Algo deu errado, tente novamente!'))
  }
}
